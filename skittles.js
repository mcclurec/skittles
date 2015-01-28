var skittles = {

	skittleImg: [
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAxCAMAAACvdQotAAACdlBMVEU/lCqU/ypVvypV1BU/vwAqvxUqqgAqfwBV6RWU/yp/qmpVlD+//1UVVQCq/z/p/9RVlD/U/5Sq/z9V1BU/vxVVlD+q/1XU/38/1BW//1UVPxUqVRUqlABq6RV//yo/fyq//1Xp/7+//38/vyqU/ypqqlVV6RVq6RWU/yo/lCoVPxVq/xUqahVq/xUVVQCq/1WU/ypq6RUVPxUVPwDp/9RVlD9qlFXU/5R/1D+U/z8VVQAqahWq/z9q6RUAAABs3mNz32M9xTGW35aB2XG/6Leb55Gf7p/I8MjL8cuv8K/O7s4/1CrV/+Ou7pG+7r5hx2Gh3Zg2wROQ44iR3oSh6Jif5JZ322iE3nfD78PC8sJw1V1/1H+P4ISh55uw6rBx2WGV1JWM3H3o89PL/9x3vmxjvlt82HzZ8tmm7Kaq7aqb4JuS2YGJ332l5aWJz4lKszGC1HSh0JtzwGub0JaJy4M9szGh6Jyn6KHJ6L9Ixz1q1FWa45CG24YqlBW/879/6X/J88mR3pHp/6oqvxV/6T/F8sXU/9QlrRNUxz2n3adVv1W//1WU6ZR/6Sqy57Kv6K+c05hV1FVq6T+U6WrT89Oq6arp/9Rq1Go/vxU/vwAVvwAqVRUqahXp/7+/6L8qfxU/fyqv6KdV1D+//5R/6RUq1BWU/1V//wAVahW//2qU/z8qqhXU/6q//3+36Leq/1VV6RW//6rU/7+v3a///+l//yoqlABV1AA/1BX///+q/yqq/2pq6RWq/z8VVRWU/yoq1AAqqgCU/xVq/xVq6QAAPwB//xUVfwAVlAAVVQAVqgAVagA/6QA/1AAqvwBV6QAVPwAAKgALMBNMAAAAP3RSTlPPvMpY1MVf08mPb83rb7J4ikJCxq1jmpTViJqJilkvRLewuu75Kn2ln9Vojbq2rWT8Iu++/K8L/Rj+2Sr+/gDwVdVqAAAEw0lEQVRIx4WWBVvjWBSGs+477rYwDDDAIItVmXV3d3fXcd3ZcQaXgcFaWqAu1Gha0qZC22kS+Ed7zk3SDlDY78mT3Jz7veecm0JuqKaWZVq3Zk1RUXFx8eZtNeuXz7ZQSwM1RQ0zMzMej8tmM9E0rbmtZnVEsaXZOuxBooEgDtoR1ijLFSsjW65ebR62Nng8nmGr1WUzQZkJs0apVN63ArLuwXA47KDpcRf4rW631TU+Tk9MTJiVDFuyvhCyLRwME9lcLrfbfcHtFhGHRskEg0zlcuSRIMsSxmGzuvtwPReAoSc0sBiG8SaTB5YiSADDhB2OZnffDMrjHqc1ZrMmHAQgGYsdWIw8zIpiGIfJNEyAmQYXba5lGLOGIUSOEZHNop/1ehmTyWEb7uvzNPzTTIeDZq+XlEAkHqvMIzWEgKkkAyvVmMO2ZgBoB/SpYVipRkwQhF0yoqgVgVgsyUAdfD74IIJMCcPWkhJx9AtZQauQkHKwiytMJqG7EqaWnZxMMljTkMz5QSFtmYjs9pK6pDxYDWACxViDl8Wu4pKfIKHdBCkneXB5yXgckHhcAIRlDbg4BHKIEHKWIVKnjcdDggBzccOkYZIFLhQKaeGC4Wv/hmQ/HE6nsw6Q0rg2hHkEzA02KCKEtHEwQ/ru3t7urCxBcArOUkDu1WrxYYgEqYZj4Vpvr5Dt/vLb8993ZaXO8OLf0ELVaeUiksThyy+90Op3ftLzRU/Pd07SFEIcxwXqqF1ICNkcI2breqXnuVZO/96ZIyO6813gJPZIBE53UJWhfGoy8Dv9fn/rMyPPno4ce//UqcNv6T5HJ0eQSCRQSpU5/ZjWL3CcIHBZzu+HOf2xN888/yL3wYi97eDThz+SCgDAGwMbqQ0BCPjBzYluLhDgIvoPz9qPR7hP2+1PGB879DYn+pEwGm+ntpIEfqk0AIFAJKI/fbb9jUH+HfvICePRQzq0gJ/o+l5qKx+RW8X6yPARY/8J+8eD/LtPHXmSf1yne53nOU4iALmTx3uOJwSMgQB1fmPXXRo4bh/p5PX2147yOV237KXuyt/yg/J5oLO/rf3nn3T2Nj3ff7njEolnID5gOUlRG/kov1RRXt//wzTqs3PRVzs6fkUAFLVYfCcbqZ3RaIZAGMugH8RHr/xoR+SrTObi17+RyVQqlUn5RkfXUncjEiX+DFwQwPO5K79MT1/+/SI4yRQAc3NwjI5totQ+ny/lS5EpQiNisUSjlj/+/Otv4k0R/9xNorF9VMs9JELicrmoRa4r2wmRTqSnRvfDH//OOVkpWWKL0LkIiOmBQGQtIGq8hXiehEZJs3MkimZUIjGfnp0a24f/+1U3F4lQUitidvTPAwHIaCN5XeyR84gSubwdvSC8QJE94nusWnZDs3BImBgR3QnCzd4YapRefep0GuLzkhIJ4knnzAs5ZBZWIr2TH0rP57WQEw6BWMgRQ/fn3/zV6fRyIi+JmGq8dX9RpVchgEFk6oFFW1KTirS+EkOK7G9avPGJzIoA1JCJW3bkapGZL4TAyhsL7fsVheuQH2RsU+GvC0V9YWB2qEqx4jeMun5JHQRuVKlX/VJS71CJFOkS/Kod6v/7uAKqYnu96lGQqn57hXr5/H9OcsM0gEi8VQAAAABJRU5ErkJggg==",
		"data:image/png;base64,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",
		"data:image/png;base64,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",
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAtCAMAAADbYcjNAAABa1BMVEX/xsb/xsb/xqr/qqr/qqr/cXH/jY1VAADGHBzGHDjiHBziODiNVThxHBz/xsb/VXFVAAD/VVVVAACqVTiqVTiqOBz/OFWqODj/VTiqVThxHBziHDiNOBz/jY3/jXFVAADicXHGOBzGODj/cVX/OFXiVVWqODj/VThxHBz/ODiqVVXiHDhVAABVAADiODiqVVWNVTiNOByNHBxVAAD/VVVxHBz/cVWqVTj/ODhxHBwAAADGjXHi4sb/xuLGqqr/qo3iVXHiqsbiVVXGHDiqOFX/jarijarGODjiODiqODiqHDjiOByqHBzicY2NODjiOFXiqqqNAByNOBzGOFXGjY3/4saqVVXGABziHDj/cY3/xqrixsbGVVXicXFxABz/xsbijY3/4uL/////VXHGcXH/cXH/VVX/OFX/jY1xHBz/qqrGHByNHBz/ABziHBz/HDj/ODiNAAD/HBziAACqAABxAADiABzGAABVAAAQcBF2AAAAO3RSTlPaodeFqriMfsDa3HCZxsfPT35vaTDd38TH25e+6Wj81xTw0Ui4gaEdP322/fAXo4j9WX+yKPs6Clv+AA1HxBkAAAPeSURBVEjHhZaHf9pIEIV1l2u5kt4TlyRusc8VjLHvkrh3G2x6EYhT16qxElL+/JtdNYrtPBdg933zZucHEszWiDYyY/d+ePAj8+CnX8Y+To7uM0OvJ8d+HtdK/4E6bU1RFPHh4/SdSGZKlm1F0zqAtLWvgPAiLz3M3orMTtmWbduiomilUruuaRAjShIvyS8yNyOPbQMDIosQ0263S22trh0ciLIkQ52pjVEk/QJjy7JsXhS1dic4C8TUAJEAsazsMJKxMca2LfHjktgudej5tQNFqfE2CSHMp0Hko21Bhg0VJVmpd0A0hq/xsi1bMBNoIGKYkCBr8AebkqJ1OvV6XftaF3meLJMMTNr+lCBpMMOSjQ0Z+pZgYlpJU8ZFWyQI7JFdgHA2Rl6RZYwNC9OSNl+DqSmiLIuWYVkGjrUwGyLTNJeIHgimBkcS6WytxG7CD34bIHRY2DCwQfrFtPVgSnZYyDI8z/RMgMw/KLIEFUyDiHZs02MRP+2W1DK9UKb5O0HStmmGaxh7URtQ2SB2EAQ4Tkh4ZhaQ6QUzroIjyAieedARyQgQB2DvLSCvFmKC7psYHuDX8iCAmh34T+QR0Jxl0scQ4kS9JjB0YYCNNuWECAihLJMFxHRoZgyAk3Rj8rwZ+wMIIbTETJ+dBTFRv+QZfMwUx6l1PmsL/YzvV1DlN2bpLBhYf7Fco9GoOfznw4tG/ji2B6rcZz6c0eP1I8dAcLkc18gfNho7rO/HfhB6z3xA9Fkf4e/mL7hqjeV2uDzXOWTZxO+6boJEIgx7sZ3LsduHHJC7F4hFCeC65++ZpUEEVM3n2SrycyyMBxph2Wof4Z4/Z5aRO4QgoShsV33EcbsV3+e+NFFkp3rJPEXwMMhUgKn6lX/+5Qq+XxSO3IToXukzzLPT8BUpFTLCFwH5R81C4chvCgKK7ES6/pTZeu6OqLlTLKCC0NzbA6IZ23u9Xle/fsZszejd7iCBjoRiGTWL4D4pC6ewHfiJ1NfwTp7Tr0iJfmavUBbAXD51z5v7UQDV+vUy+VS+JEyPYgHa7Z6elPdP9iG+exWZv30jGerKJEFWdT1c7ibSdT12BwRFIIReYWYiJGYGzAEAyOam+nojQDbe6eFWb6jwgIBYyUSXvlX9BscIoaqXy8k1eU39LgPE9Xz/lX9tffMOhM5KvZwfvL+sqeptTI8O8Hplfvgutrp+C9Nzz92ufrny5+i9cvGvG5meSzIu383deEdehQO1hgmdSH1z231/A6bQSqBWq7Wp6nDwN4t3fbt4lAKIUDGZerJ49xcSiJp7kkpN/A2amEj9+mhxxPA/e/lCt7aHqjAAAAAASUVORK5CYII=",
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAvCAMAAACWqWnGAAABU1BMVEX//z///5T//yr//2r//yr//xW/fxW/fwDp1BW/qhW/lBW/lBXp6QD/6Srp1Crp1Cr/6QD/6QDUvz///z/Uv1XUv1W/qhX//wD//1X//wD//z///2r//z/p1BW/fxXp1BW/fwC/fwD/6RW/qhX/6Sq/lBXpvyr//2q/lBX//yrUvz/U1Gq/lADU1FX//yr//xX//xX//xX//xW/fxX//z+/qhXUqir/6SrUvz/UvyrUvyr//wD//z///xX//wD//yrUvyrUqhX//xXUvyr//xX//yr//wDUvyr//yr//xUAAAD//9Tp1D/p6Srpvyr/6Wrp1FX/6Srp6T///+n//5T/////6VXp1BW/lBXp1Crp6QDUvxX//6r//2rUqhX/6RX//7//6T///3/UvwD//1X//yrUlAD//z/pvwC/agC/lADUqgD//xXp1AD/6QC/fwD//wANscwqAAAAS3RSTlPfe/Kh36G/bOLfmb/V4uKDxKFka9eX19iykb9OxNzk35nTbpjJaM0m0tz+S0I/R2M16QjveThI8SzQpuydLr0Xev55/rQN/Bf+JgD3pQWlAAADY0lEQVRIx5WWZ3vbNhSFmbbpTJt0ptl779hOPOJtaziOLZEUNQgO0AARiRCM//8pF6BEkRbtROeR8JDAfe+5oASAxt6U1q/Nn7/6w8p3xtXvz11bnx43Ttw/mr9e41xKyQlBVisk17fqZyIv/6dShQNEvSj8aCHCKN95eSpS39H5JTScsQiFIfIYY1zynXo5ssXTirQLIwqxCWWMqo6tEmR9TY4EWRllUQhCtk0Y10nW1k8iq29kDqHMCy3LCm0bIZaay5XVIvK6InPiNRqFVqtl2VHkwfw1Iiuv80idywLCiBe2QGEYqfmPRiv1CfL2jSwi8KNE4NKywkg95XH/ytsM2ZEnxWvMDq2PyPaoHJmodm2MvOKyRDUoiRGunsak81WK7NbkaZrKVdnVyAcuv11XFHKGSZl2AZnnlVmQLUCezGQiL+8Zj+hsiKwbf/PZCHHXmOl5SSHEn8Z9zmcBhLhkPPlmRKS6YLwvQ6b6xES3ABG5IaqWulqVhJcTvd7PxvsALjIiYpxJhogkHqMlFr3h8Jbxu0LE2APWBvFsZBMP1iPNB2sNQTeM+0HWQT1CKeUQDYSHwkgU82t9fmh8+JQxlASCpQhl2ItIUEiv4kHLxl1Aej3dH3BKheDYQx6lGBMcjGbcy4CjI3fDWO221W1P9AQmCGrBnKDDIGhi7BQrUkSSuIvG3h/tUR9EIUdgFBHI33Qcp5mPBgMAkuQG/PkvjpFhEBw6wkFOMwgC7GBsBpP0aTyYbABSPYAuPdYWptPEh4cYN7Fpml1dsq4mVayQqlr7yweu+znFzIaJTQcI/MlsnAQGClnW20V123WT5EhR3f3h/n5XqdFotNP5JnEcDwbwgcYHE72Pbbi+r/IoqN1odNvtNkAHKl5HKh0fHw8GyebGeLd86AMDvjDJI9d1davz61gdD4rjZCnbYKvbm74P/nGSKU7Dc1Im1cnO/+KpP65BkVD5KK6fI2J/IX++PNuGyopp+331zRgg3hVPsWdPN5NBLrqvm5TQbWdMTM7KxX/cRNfTz1KnV7oZdP5bLDmR/9324042hdSkP7Lo3Cs/918s+X7neOKQSs3j8fNT3y7+WvI7neKzBd15cOY7zLt7v3QK1M3bz7/y2gNaePDrb4/n5uZu3vnx9k8L0+NfAG62cpXa8olpAAAAAElFTkSuQmCC",
	],
	twelfthImg: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDA5IDQwOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDA5IDQwOSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cG9seWdvbiBmaWxsPSIjMEIyMzQzIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludHM9IjMsNDAuMiAzOS4zLDMgMTIzLjMsMyAxMjMuMywzMjcuMiANCgkJMTU5LjMsMzI3LjIgMTU5LjMsNDA2IDMsNDA2IDMsMzI2LjIgNDEuMywzMjYuMiA0MS4zLDkzLjIgMyw5My4yIAkiLz4NCgk8cG9seWdvbiBmaWxsPSIjMEIyMzQzIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludHM9IjE4Mi44LDExNi40IDE4Mi44LDQ1LjcgMjIxLjUsMyANCgkJMzg1LjgsMyA0MDYsMjYuNCA0MDYsMjIwLjcgMzg4LjEsMjM3LjcgMjY2LjMsMjM3LjcgMjY2LjMsMzI2LjIgMzQ2LjMsMzI2LjIgMzQ2LjMsMjk5LjIgNDA2LDI5OS4yIDQwNiw0MDYgMTgzLjMsNDA2IA0KCQkxODMuMywyMDIuMiAyMjcuMywxNTYgMzQ2LjMsMTU2IDM0Ni4zLDgzLjIgMjY2LjMsODMuMiAyNjYuMywxMTYuNyAJIi8+DQo8L2c+DQo8Zz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzEzLjMsMjY1LjZjLTE0LjQtMi44LTMzLjMtMy43LTQxLjMtMy43SDgxLjljLTExLjcsMC0yNC4xLDAtMzAuNC05LjZjLTYuMy05LjgtMi44LTE5LjQsNy44LTM4LjcNCgkJYzAuOS0xLjMsMzMuNS02Mi42LDMzLjUtNjIuNnMzLjMsNC4xLDYuNyw2LjdjMy4zLDIuNiw2LjcsMy45LDE1LjksMy45YzE2LjEsMCwxMjAtMC4yLDEyMS4xLTAuMmMyMS4xLDAsNDIuNCwyLjIsNTYuMywxNy40DQoJCWM3LjIsMC45LDMwLjIsMy45LDQ5LjQsMTNjMTEuMSw1LjQsMTguNSwxMy4zLDIxLjMsMjMuMWMwLjksMywxLjMsNi4xLDEuMyw5LjRjMCw5LjEtMy41LDE5LjQtMTAuMiwzMA0KCQljLTE0LjQsMjIuNC0yNy42LDMwLjItMjguMSwzMC43Yy04LDUuNy0xNi4xLDYuMS0xNi4xLDYuMXM3LjItOCw5LjYtMTYuMUMzMjIsMjY2LjcsMzEzLjMsMjY1LjYsMzEzLjMsMjY1LjYiLz4NCgk8cGF0aCBmaWxsPSIjMEEyMzQzIiBkPSJNMzM5LjYsMTk2LjdjLTIxLjctMTAuNC00OS42LTEyLjYtNDkuNi0xMi42Yy0xMi4yLTE0LjgtMzIuOC0xNy4yLTUzLjUtMTcuMmMwLDAtMTA0LjgsMC4yLTEyMS4xLDAuMg0KCQljLTE4LjksMC0yMC45LTcuNi0yMC45LTcuNmwtMjUuNyw0Ny44SDEzNWMyMC45LDAsMjEuNy0yLjIsMzUuNy0xMi4yYzE0LjYtMTAuOSwyNi4zLTE0LjYsNDAuMi0xNC42YzEzLjksMCwyMy4xLDMsMzguNSwxMA0KCQljMTUuNCw2LjcsMjMuNSwxMC4yLDMyLjgsNi4zYzAsMC03LjIsOS44LTI5LjEsMC43Yy0yMS43LTkuMS0yNy42LTExLjEtNDAuOS0xMS4xYy0xMywwLTI4LjEsNi4zLTQ2LjgsMjVsMjIuNCwxOA0KCQljMCwwLTUuMiw4LTguNSwxM2MtMy41LDUtMyw4LjUtMS4zLDExLjFjMS43LDIuNCw0LjEsMy43LDEyLjQsMy43czc0LjYtMC4yLDgyLTAuMmM2LjUsMCwyNi41LDAuNyw0Mi40LDMuNw0KCQljMjAuOSw0LjEsNy40LDIxLjcsNy40LDIxLjdzMTMuOS05LjEsMjcuOC0zMC45QzM2NS4zLDIyNi45LDM2MS40LDIwNy4xLDMzOS42LDE5Ni43Ii8+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTMwMS4xLDIwMC42Yy05LjgtMi40LTEuNS04LTEuNS04Yy0xNC4xLDIuOC0xOS42LDE0LjYtMjAuNywxNy44Yy0wLjIsMC40LTAuNCwwLjktMC43LDEuMw0KCQljLTcuOCwxNS45LTE1LDE1LTI4LjUsMTVoLTIzLjFjLTE4LjcsMC0yNy40LDkuNC0zNi4zLDI1aDEwLjRjOS42LTE0LjQsMTctMTguMywzNS45LTE5LjRjNDMuNSwwLDc4LjMsMTIuNCw5Ni42LDIyDQoJCUMzNTkuNiwyMTAuNiwzMjAuOSwyMDMuNCwzMDEuMSwyMDAuNiIvPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMjAuMiwyNTEuNWM0LjgtNy40LDE0LjgtOS44LDMwLjctOC45YzM5LjQsMi4yLDYyLDEwLDc5LjYsMTYuNWMtMjEuNy0xMi42LTYwLjItMjEuNy04Ny4yLTIxLjcNCgkJYy0xMywwLTI0LjYsMi40LTMxLjMsMTQuMUgyMjAuMnoiLz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjYyLjQsMjA4Yy01LjIsNy4yLTEyLDkuNi0zMS4xLDguM2MtMjIuNC0xLjUtMTYuNS0xMC45LTEzLjktMTUuNGwwLDBjMC43LTEuMywyLTMuNSwzLjMtNS45DQoJCWMtMTcuMi0xLjEtMjkuNiwxMi4yLTI5LjYsMTIuMmMxMi44LDEyLjYsMjEuMywxMy45LDMyLjgsMTMuOWgyMS41YzIwLDAsMjQuOC04LjksMjYuNy0xM0MyNjguNSwyMDguNCwyNjUuNSwyMDguNCwyNjIuNCwyMDgiLz4NCgk8cGF0aCBmaWxsPSIjNkJCRTQ1IiBkPSJNMjUyLjksMjA1LjhjLTAuNC0wLjItMC45LTAuNC0xLjMtMC40Yy0yLDIuMi01LjQsMy4zLTguNywyLjhjLTQuMy0wLjctNi43LTMuNy01LjctNw0KCQljMC4yLTAuNCwwLjQtMC45LDAuNy0xLjNjLTIuMi0wLjktNC4zLTEuNy02LjUtMi40Yy00LjMsNy4yLTcsMTIsOC4zLDEzLjNjOS42LDAuOSwxMi4yLTAuOSwxNC4xLTQuMw0KCQlDMjUzLjUsMjA2LjMsMjUzLjMsMjA2LDI1Mi45LDIwNS44Ii8+DQoJPHBhdGggZmlsbD0iI0E2QUNBRiIgZD0iTTE3NS41LDIzMy4yYy04LDEzLjctMTEuMSwxNy01LjQsMjMuNUg4MS45Yy0xMywwLTIxLjMtMC40LTI1LjctNy4yYy00LjEtNi41LTMuMy0xMi42LDgtMzMuMWg3NC44DQoJCWMxMi44LDAsMTYuMSwwLjcsMjMuMyw2LjFDMTY5LjEsMjI4LDE3NS41LDIzMy4yLDE3NS41LDIzMy4yIi8+DQo8L2c+DQo8L3N2Zz4NCg==",
	maxSize: 50,		//In pixels
	minSize: 30,		//In pixels
	skittleCount: 100,

	random: function(min, max, decimal){
		if (decimal){
			return Math.random() * (max - min + 1) + min;
		} else {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	},

	twelfthMan: function(){
		var wrapper = document.createElement("div"),
			lombardi = document.createElement("div");
		wrapper.id = "twelfthMan";
		lombardi.className = "lombardi";
		wrapper.appendChild(lombardi);

		for (var i = 0; i < skittles.skittleCount; i++) {
			var skittle = document.createElement("img"),
				size = skittles.random(skittles.minSize, skittles.maxSize);
			skittle.src = skittles.skittleImg[skittles.random(0, skittles.skittleImg.length-1)];
			skittle.className = "skittle";
			skittle.setAttribute('style',
				'width: ' + size + 'px;'+
				'left: ' + skittles.random(0, (window.innerWidth - size)) + 'px;'+
				'-webkit-animation-delay: ' + (2 / skittles.skittleCount * i) + 's;'+
				'animation-delay: ' + (2 / skittles.skittleCount * i) + 's;'
			);
			wrapper.appendChild(skittle);
		};

		wrapper.onclick = this.stop;
		document.body.appendChild(wrapper);
	},

	fadeOut: function(element){
		if (element){
			element.className = element.className + " fadeOut";
			setTimeout(function(){
				element.parentNode.removeChild(element);
			}, 350); //Same time as CSS below
		}
	},

	injectCss: function(){
		if (!document.getElementById("skittlesStyles")){
			var css =
				'@-webkit-keyframes skittleFall {'+
					'0% { -webkit-transform: translate3d(0,0,0); }'+
					'50% { -webkit-transform: translate3d(0,110vh,0); }'+
					'100% { -webkit-transform: translate3d(0,110vh,0); }'+
				'}'+
				'@keyframes skittleFall {'+
					'0% { transform: translate3d(0,0,0); }'+
					'50% { transform: translate3d(0,110vh,0); }'+
					'100% { transform: translate3d(0,110vh,0); }'+
				'}'+
				'@-webkit-keyframes fadeIn {'+
					'0% { opacity: 0; }'+
					'100% { opacity: 1; }'+
				'}'+
				'@keyframes fadeIn {'+
					'0% { opacity: 0; }'+
					'100% { opacity: 1; }'+
				'}'+
				'#twelfthMan {'+
					'cursor: pointer;'+
					'position: fixed;'+
					'top: 0;'+
					'left: 0;'+
					'right: 0;'+
					'bottom: 0;'+
					'z-index: 99;'+ // One less than my main nav z-index
				'}'+
				'.lombardi {'+
					'position: absolute;'+
					'top: 10%;'+
					'left: 10%;'+
					'right: 10%;'+
					'bottom: 10%;'+
					'background: url('+ this.twelfthImg +') no-repeat 50% 50%;'+
					'background-size: contain;'+
					'-webkit-animation: fadeIn .3s ease both;'+
					'animation: fadeIn .3s ease both;'+
				'}'+
				'.skittle {'+
					'position: fixed;'+
					'top: -' + this.maxSize + 'px;'+
					'-webkit-animation: skittleFall 2s cubic-bezier(.45,0,1,1) infinite both;'+
					'animation: skittleFall 2s cubic-bezier(.45,0,1,1) infinite both;'+
				'}'+
				'.fadeOut {'+
					'transition: opacity .3s ease;'+
					'opacity: 0;'+
				'}',
				skittleStyles = document.createElement('style');
				skittleStyles.id = "skittlesStyles";

			skittleStyles.innerHTML = css;
			document.getElementsByTagName('head')[ 0 ].appendChild(skittleStyles);
		}
	},

	isRunning: false,
	start: function(){
		this.injectCss();
		if (!this.isRunning){
			this.twelfthMan();
			document.addEventListener('keydown', skittles.stop);
			this.isRunning = true;
		}
	},

	stop: function(e){
		if (e.type === 'keydown' && e.keyCode !== 27){
			return;
		}

		var twelve = document.getElementById('twelfthMan');
		skittles.fadeOut(twelve);

		document.removeEventListener('keydown', skittles.stop);
		skittles.isRunning = false;
	},

};
