export const formatDate = (dateString) => {
    return new Intl.DateTimeFormat('tr-TR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(new Date(dateString));
};

export const formatCurrency = (value) => {
    return value ? Number(value).toFixed(2) : "Yükleniyor...";
};