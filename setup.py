from setuptools import setup, find_packages
import os

version = '0.1'

setup(name='customer.diazo.krain',
      version=version,
      description="Theme for kraincostarica.com",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from
      # http://pypi.python.org/pypi?%3Aaction=list_classifiers
      classifiers=[
        'Development Status :: 4 - Beta',
        'Environment :: Web Environment',
        'Framework :: Plone',
        'Framework :: Plone :: 4.2',
        'Framework :: Plone :: 4.3',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: GNU General Public License v2 (GPLv2)',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2.6',
        'Programming Language :: Python :: 2.7',
        ],
      keywords='plone diazo customer krain',
      author='Propertyshelf, Inc.',
      author_email='development@propertyshelf.com',
      url='https://github.com/propertyshelf/customer.diazo.krain',
      license='GPL',
      packages=find_packages('src', exclude=['ez_setup']),
      package_dir={'': 'src'},
      namespace_packages=['customer', 'customer.diazo'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'z3c.jbot',
          # -*- Extra requirements: -*-
      ],

      entry_points="""
      # -*- Entry points: -*-
      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
