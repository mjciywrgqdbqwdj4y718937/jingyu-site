# 鲸屿官网 · 部署说明

本站是纯静态站点（HTML/CSS/JS，无外部依赖），可直接放到任意静态托管。

## 本地预览
```bash
cd jingyu-site
python -m http.server 8080
# 浏览器打开 http://127.0.0.1:8080
```

## 部署到公网（任选其一）
1. **Vercel / Netlify / Cloudflare Pages**：把整个 `jingyu-site` 文件夹拖进去，自动生成 HTTPS 域名。
2. **GitHub Pages**：新建仓库，把站点文件推到 `main` 分支，Settings → Pages → 选择 `main` / root。
3. **阿里云 OSS + CDN**：上传到 Bucket，开启静态网站托管，绑定已备案域名。
4. **自己的服务器（Nginx）**：把文件夹放到 `/var/www/jingyu`，Nginx 指向该目录即可。

## 上线前要改的占位符
- `feedback@jingyu.example`、`hello@jingyu.example` → 你的真实邮箱
- 页脚 `ICP备案：待填写` → 你的 ICP 备案号（中国大陆公网部署必须）
- 如需替换下载包：覆盖 `downloads/jingyu-1.2-win64.zip`

## 合规清单（避免被封禁）
- 本站内容仅围绕软件介绍、文档、支持，无违法违规信息
- 不提供侵权资源、不涉及赌博/诈骗/色情/政治敏感内容
- 不做虚假宣传；下载包与页面版本保持一致
- 有隐私政策、用户协议、免责声明、内容规范
- 如在中国大陆公网部署：完成 ICP 备案，页脚展示备案号

## 目录
```
index.html          首页
product.html        产品（功能/下载/更新/热更）
docs.html           文档（快速开始/连接/账号/FAQ）
ecosystem.html      生态（插件/人格/模型/API）
support.html        支持（反馈/排查/FAQ/状态）
about.html          关于（故事/理念/合规）
legal.html          法律（隐私/协议/免责/内容规范）
404.html            404 页面
assets/             样式、脚本、Logo
downloads/          鲸屿 1.2 下载包
robots.txt / sitemap.xml / manifest.webmanifest
```
