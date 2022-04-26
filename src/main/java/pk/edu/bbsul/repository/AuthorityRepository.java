package pk.edu.bbsul.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pk.edu.bbsul.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
