/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Praticidade de Gestão',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Monitore cada passo e direciona sua empresa 
        com praticidade e total controle.
      </>
    ),
  },
  {
    title: 'Controle de Processos',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Gerencie todos processos para cuidar de seu lar e Pets
        com toda segurança que a tecnologia pode oferecer.
      </>
    ),
  },
  {
    title: 'Dados Simplificados',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Nada melhor para tomadas de decisão do que
        informações concretas e de facil acesso. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getBlog,
              )}
              to={useBaseUrl('blog/')}>
              Conheça nosso projeto
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className='container'>
        <h1 className="text--center">
          Sobre Nós
        </h1>
        <p className="text--justify"> 
          Há mais de três anos estamos no mercado, sempre oferecendo aos nossos clientes o melhor de nossos produtos para eles e seus pets;
          Todos sempre bem cuidados e saudáveis, porque é nosso objetivo principal cuidar deles, mas agora, com um novo software de código aberto,
          apresentamos uma nova maneira de atender nossos clientes de maneira inovadora, usando a tecnologia como nossa principal aliada.
        </p>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
