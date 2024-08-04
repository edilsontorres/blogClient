export const FormatData = (data: string) => {

    const getDate = data;
    const coverData = new Date(getDate);
    const dataFormat = Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(coverData);

    return dataFormat;
}