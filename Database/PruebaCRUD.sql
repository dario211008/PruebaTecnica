CREATE DATABASE PruebaCRUD;
GO

USE [PruebaCRUD]
GO
/****** Object:  Table [dbo].[Libro]    Script Date: 28-oct-20 6:37:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Libro](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NOT NULL,
	[Descripcion] [varchar](30) NULL,
	[Autor] [varchar](150) NULL,
	[FechaPublicacion] [datetime] NULL,
	[NumeroEjemplares] [int] NULL,
	[Costo] [decimal](4, 2) NULL,
 CONSTRAINT [PK__Libro__3214EC077D316C8B] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[Libro] ON 

GO
INSERT [dbo].[Libro] ([Id], [Nombre], [Descripcion], [Autor], [FechaPublicacion], [NumeroEjemplares], [Costo]) VALUES (1, N'Libro 1', N'Descripción 1', N'Autor 1', CAST(N'2020-10-28 00:00:00.000' AS DateTime), 2, CAST(11.23 AS Decimal(4, 2)))
GO
INSERT [dbo].[Libro] ([Id], [Nombre], [Descripcion], [Autor], [FechaPublicacion], [NumeroEjemplares], [Costo]) VALUES (2, N'Libro 2', N'Descripción 2', N'Autor 2', CAST(N'2020-10-28 00:00:00.000' AS DateTime), 15, CAST(21.50 AS Decimal(4, 2)))
GO
SET IDENTITY_INSERT [dbo].[Libro] OFF
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [UQ__Libro__75E3EFCF9F6A7346]    Script Date: 28-oct-20 6:37:15 PM ******/
ALTER TABLE [dbo].[Libro] ADD  CONSTRAINT [UQ__Libro__75E3EFCF9F6A7346] UNIQUE NONCLUSTERED 
(
	[Nombre] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
