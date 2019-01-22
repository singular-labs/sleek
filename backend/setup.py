import os

from setuptools import setup, find_packages


REQUIREMENTS_FILE = os.path.abspath(os.path.join(__file__, "../requirements.txt"))


def get_requirements(file_path):
    return open(file_path).read().splitlines()


setup(
    name="sleek",
    version="0.1",
    author="Singular",
    description="",
    packages=find_packages(where="src"),
    package_dir={
        '': 'src'
    },
    install_requires=get_requirements(REQUIREMENTS_FILE),
    url="https://github.com/singular-labs/sleek",
    include_package_data=True,
    entry_points={
        'console_scripts': [
            'sleek = sleek.__main__:cli',
        ]
    },
)
