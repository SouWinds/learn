module.exports = {
    title: 'Knowledge' + 'Base',
    base: '/learn/',
	// 输出目录 默认值: .vuepress/dist
	dest: '.docs',
    description: 'Learning knowledge, fast people step!',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: 'index', link: '/' },
			{ text: '景院人', items: [
			    { text: '景院裹裹',link: '/zh/guide/JYPeople/miniGuoGuo' },
			] },
            { text: 'English', items: [
                { text: 'personal summary',link: '/zh/guide/english/' },
				{ text: 'vocabulary',link: '/zh/guide/english/vocabulary' }
            ] },
            { text: 'Node.js', items: [
                { text: 'personal summary',link: '/zh/guide/nodejs/summary' },
                { text: 'Demo', items: [
					{ text: '景院服务助手', link: '/zh/guide/JDZ/JDZ' },
                    { text: 'nodejs创建项目', link: '/zh/guide/nodejs/' },
                    { text: '有道精品课链接分析Demo', link: '/zh/guide/nodejs/youdao' }
                ] },
                { text: 'Bank', items: [
                    { text: 'node.js官方文档', link: 'http://nodejs.cn/latest-api/' }
                ] }

            ] },
            { text: 'Vue.js', items: [
                { text: 'personal summary',link: '/zh/guide/vuejs/' },
				{ text: 'Demo', items: [
				    { text: 'EduCat', link: '/zh/guide/vuejs/2' }
				] },
                { text: 'Bank', items: [
                    { text: 'Vue.js官方文档', link: 'https://cn.vuejs.org/v2/guide/' }
                ] }
            ] },
			{ text: 'Network', items: [
			    { text: 'OSPF',link: '/zh/guide/network/' },
			    { text: 'HCIA培训',link: '/zh/guide/network/HCIA' },
			] },
            { text: 'google', link: 'https://google.com' },
        ],
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ],
        displayAllHeaders: true, // 默认值：false
        sidebar: 'auto',
        serviceWorker: {
            updatePopup: true // Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是:
            // updatePopup: {
            //    message: "New content is available.",
            //    buttonText: "Refresh"
            // }
        },
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'souwind/learn',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'source',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'pingxi/learn',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
    }
}
