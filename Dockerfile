# 使用Node.js官方镜像作为基础镜像
FROM node:latest
 
RUN apk add --no-cache libc6-compat
# 设置工作目录
WORKDIR /app
 
# 安装pnpm
RUN npm install -g pnpm
 
# 复制您的应用程序文件到容器中
COPY . /app


# 使用阿里云的 npm 镜像源
RUN pnpm config set registry https://registry.npmmirror.com
# 使用pnpm安装依赖
RUN pnpm i next react react-dom nextra nextra-theme-docs

RUN pnpm build

EXPOSE 3000

 
# 设置运行时的环境变量，如果需要的话
# ENV YOUR_ENV_VARIABLE=value
 
# 容器运行时默认执行的命令
CMD node .next/server/server.js; \
    fi