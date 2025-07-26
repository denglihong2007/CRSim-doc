---
title: 配置 CRSim 插件开发环境
icon: toolbox
index: false
---

## 开发环境

**首先确保您的系统满足以下要求：**

- Windows 10 20H1 及以上的操作系统，x86_64 架构

要在本地进行开发，**您需要安装以下负载和工具**：

- [.NET 9.0 SDK](https://dotnet.microsoft.com/zh-cn/download/dotnet/9.0)
- [Visual Studio 2022](https://visualstudio.microsoft.com/)，包括 `.NET 桌面开发` 和 `WinUI 应用程序开发` 工作负载
- [Git](https://git-scm.com/)

## 添加 CRSim 仓库 NuGet 包源

CRSim 的核心库（如 `CRSim.Core`）通过 GitHub Packages 分发，因此您需要配置 NuGet 包源以从 GitHub 拉取依赖。

### 获取 GitHub Token
要访问 GitHub 私有或授权包源，您需要在 [Github 用户设置](https://github.com/settings/tokens)中设置一个 GitHub 的 **Personal Access Token (PAT)**。推荐设置权限为：

- `read:packages`

- `repo`（如需访问私有仓库）

### 添加全局包源

您只需运行以下命令一次：

```shell
dotnet nuget add source --username YOUR_GITHUB_USERNAME --password YOUR_GITHUB_TOKEN --store-password-in-clear-text --name crsim-github "https://nuget.pkg.github.com/denglihong2007/index.json"
```

请将 `YOUR_GITHUB_USERNAME` 替换为您的 GitHub 用户名，`YOUR_GITHUB_TOKEN` 替换为您上一步生成的访问令牌。

::: warning 注意
命令中的 `--store-password-in-clear-text` 表示将 token 以明文形式存储在本地配置文件中，仅建议在受信环境使用。
:::

添加后，可在`%AppData%\NuGet\NuGet.Config`位置查看并编辑。

添加成功后，您就可以在项目中引用 CRSim 的 NuGet 包了。

## 克隆并构建 CRSim

开发插件的过程中需要使用 CRSim 源码以构建 CRSim 本体的可执行文件，以用于运行和调试插件。

::: note 为什么不使用 Releases 中发布的可执行文件
Release 版本的构建无法使用热重载（包括 XAML 热重载）功能，调试起来很麻烦。
:::

以下是克隆仓库的命令行：

::: tabs#clonemethod
@tab Github

```shell
git clone https://github.com/denglihong2007/CRSim.git
```

@tab 镜像站

```shell
git clone https://crsim.com.cn/CRSim.git
```

:::

克隆完成后，运行以下命令进入 CRSim 源代码目录。

``` shell
cd CRSim
```

克隆仓库后，默认处于 master 分支上，对应 CRSim 的稳定版本。建议在稳定版本的基础上开发插件，以获得较好的兼容性。如果您想签出到特定版本上，请使用对应版本的标签名（如 `v2.3.0.0`）。

``` shell
# 如果要签出到某个版本上，请使用标签名：
git checkout v2.3.0.0
```

然后在 **Developer PowerShell for Visual Studio 2022** 运行以下脚本：

``` shell
./tools/plugin/build.ps1
```

::: tip 提示
打开 `Windows Terminal` 应用程序，点击标签中的【+】即可找到 `Developer PowerShell for Visual Studio 2022`。
:::

::: warning 提醒
运行此脚本后，请重启 Visual Studio 等开发工具，以更新相关环境变量。
:::

这个脚本会自动清理上次的构建，进行构建并设置相关的环境变量。这样就获得了 CRSim 的 Debug 构建。构建默认输出在 `（项目文件夹\CRSim\bin\Debug\net9.0-windows10.0.19041.0）`下。

## 更新

如果 CRSim 发布了新版本，您就需要需要更新 CRSim 仓库。要更新仓库，请先拉取，然后重新进行构建。

``` shell
git pull
./tools/plugin/build.ps1
```

## 开始开发插件

一切准备工作就绪后，继续阅读文章[开始编写插件](../dev/create-project.md)，开始您的插件开发之旅吧！