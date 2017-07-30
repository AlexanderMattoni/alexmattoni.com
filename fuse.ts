import { FuseBox, WebIndexPlugin } from "fuse-box";

const fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.js",
    cache: true,
    plugins: [
        WebIndexPlugin({
            template: "src/index.html",
        }),
    ],
});

fuse.dev();

fuse.bundle("app").instructions(`>index.ts`).watch().hmr();

fuse.run();
