export const formatDate = (dateString) => {
    return new Intl.DateTimeFormat('tr-TR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(new Date(dateString));
};

export const formatCurrency = (value) => {
    if (value) {
        return Number(value)
            .toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else {
        return "Yükleniyor...";
    }
};