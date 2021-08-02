export const initialData = {
    'task': {
        't1': {
            id: 't1',
            title: 'Manusia',
            content: 'Manusia atau orang dapat diartikan berbeda-beda dari segi biologis, rohani, dan istilah kebudayaan, atau secara campuran. Secara biologis, manusia diklasifikasikan sebagai Homo sapiens, sebuah spesies primata dari golongan mamalia yang dilengkapi otak berkemampuan tinggi.'
        },
        't2': {
            id: 't2',
            title: 'Hewan',
            content: 'Hewan, binatang, fauna, margasatwa, atau satwa adalah organisme eukariotik multiseluler yang membentuk kerajaan biologi Animalia.'
        },
        't3': {
            id: 't3',
            title: 'Tumbuhan',
            content: 'Dalam biologi, tumbuhan adalah organisme eukariota multiseluler yang tergolong ke dalam kerajaan Plantae. Di dalamnya terdiri atas beberapa klad yakni, tanaman berbunga, Gymnospermae atau Tumbuhan berbiji terbuka, Lycopodiopsida, paku-pakuan, lumut, serta sejumlah alga hijau.'
        }
    },
    'column': {
        'c1': {
            id: 'c1',
            title: 'To Do',
            taskIds: ['t1','t2']
        },
        'c2': {
            id: 'c2',
            title: 'Doing',
            taskIds: ['t3']
        },
        'c3': {
            id: 'c3',
            title: 'Done',
            taskIds: []
        }
    },
    columnOrder: ['c1','c2','c3']
}