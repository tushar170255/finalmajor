package com.hero.hero.repo;

import com.hero.hero.models.Hero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface HeroRepository extends JpaRepository<Hero,Long> {
     Hero findByUsrName(String name);

     Hero findTop1ByServicePincodeOrderByTaskAsc(Long pin);
     Hero findByid(Long id);
     @Transactional
     @Modifying
     @Query("DELETE FROM Hero   WHERE usrName = :userName")
     Integer deleteHeroByUsrName(String userName);
}
