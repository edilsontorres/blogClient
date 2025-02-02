import * as P from './PaginationStyle';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    //Determina as páginas a serem exibidas (intervalo)
    const pageRange = 2; // Número de páginas antes e depois da página atual
    const startPage = Math.max(2, currentPage - pageRange);
    const endPage = totalPages > 1 ? Math.min(totalPages - 1, currentPage + pageRange) : 1; // Ajuste para não quebrar quando só houver uma página

    return (
        <P.paginationContainer>
            <button disabled={currentPage === 1} onClick={() => goToPage(1)}>
                1
            </button>
            {currentPage > pageRange + 1 && <span>...</span>}

            {[...Array(endPage - startPage + 1)].map((_, index) => {
                const page = startPage + index;
                return (
                    <button
                        key={page}
                        className={page === currentPage ? "active" : ""}
                        onClick={() => goToPage(page)}
                    >
                        {page}
                    </button>
                );
            })}
            {currentPage < totalPages - pageRange && <span>...</span>}
            
            {totalPages > 1 && (
                <button disabled={currentPage === totalPages} onClick={() => goToPage(totalPages)}>
                    {totalPages}
                </button>
            )}

            <button disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)}>
                Próximo
            </button>
        </P.paginationContainer>
    );
};
