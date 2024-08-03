export const FormatData = (data: string) => {

    const getDate = data.split('T')[0];
    const coverData = new Date(getDate);
    const dataFormat = Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(coverData);

    console.log(coverData)

    return dataFormat;
}