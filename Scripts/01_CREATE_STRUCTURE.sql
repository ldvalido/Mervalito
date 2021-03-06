/****** Object:  Table [dbo].[BondRating]    Script Date: 3/17/2019 9:48:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BondRating](
	[IdBondRating] [int] IDENTITY(1,1) NOT NULL,
	[Symbol] [varchar](50) NOT NULL,
	[Description] [varchar](50) NOT NULL,
 CONSTRAINT [PK_BondRating] PRIMARY KEY CLUSTERED 
(
	[IdBondRating] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BondType]    Script Date: 3/17/2019 9:48:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BondType](
	[IdBondType] [int] IDENTITY(1,1) NOT NULL,
	[Description] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_BondType] PRIMARY KEY CLUSTERED 
(
	[IdBondType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Caution]    Script Date: 3/17/2019 9:48:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Caution](
	[IdCaution] [int] IDENTITY(1,1) NOT NULL,
	[Days] [int] NOT NULL,
	[IdCurrency] [int] NOT NULL,
	[Percentage] [float] NOT NULL,
 CONSTRAINT [PK_Caution] PRIMARY KEY CLUSTERED 
(
	[IdCaution] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CompanyManager]    Script Date: 3/17/2019 9:48:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyManager](
	[IdCompanyManager] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](50) NOT NULL,
	[ExternalId] [int] NOT NULL,
 CONSTRAINT [PK_CompanyManager] PRIMARY KEY CLUSTERED 
(
	[IdCompanyManager] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Currency]    Script Date: 3/17/2019 9:48:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Currency](
	[IdCurrency] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](50) NOT NULL,
	[Symbol] [varchar](3) NOT NULL,
	[Rate] [float] NOT NULL,
 CONSTRAINT [PK_Currency] PRIMARY KEY CLUSTERED 
(
	[IdCurrency] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Exceptions]    Script Date: 3/17/2019 9:48:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Exceptions](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[GUID] [uniqueidentifier] NOT NULL,
	[ApplicationName] [nvarchar](50) NOT NULL,
	[MachineName] [nvarchar](50) NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[Type] [nvarchar](100) NOT NULL,
	[IsProtected] [bit] NOT NULL,
	[Host] [nvarchar](100) NULL,
	[Url] [nvarchar](500) NULL,
	[HTTPMethod] [nvarchar](10) NULL,
	[IPAddress] [nvarchar](40) NULL,
	[Source] [nvarchar](100) NULL,
	[Message] [nvarchar](1000) NULL,
	[Detail] [nvarchar](max) NULL,
	[StatusCode] [int] NULL,
	[SQL] [nvarchar](max) NULL,
	[DeletionDate] [datetime] NULL,
	[FullJson] [nvarchar](max) NULL,
	[ErrorHash] [int] NULL,
	[DuplicateCount] [int] NOT NULL,
 CONSTRAINT [PK_Exceptions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InvestmentHorizon]    Script Date: 3/17/2019 9:48:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InvestmentHorizon](
	[IdInvestmentHorizon] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](50) NOT NULL,
 CONSTRAINT [PK_InvestmentHorizon] PRIMARY KEY CLUSTERED 
(
	[IdInvestmentHorizon] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Languages]    Script Date: 3/17/2019 9:48:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Languages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LanguageId] [nvarchar](10) NOT NULL,
	[LanguageName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Languages] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MutualFund]    Script Date: 3/17/2019 9:48:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MutualFund](
	[IdMutualFund] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Portion] [float] NOT NULL,
	[MinimumInvestment] [float] NOT NULL,
	[SettlementDeadline] [int] NOT NULL,
	[IdCurrency] [int] NOT NULL,
	[IdCompanyManager] [int] NOT NULL,
	[IdInvestmentHorizon] [int] NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[LowerDuration] [int] NOT NULL,
	[UpperDuration] [int] NOT NULL,
 CONSTRAINT [PK_MutualFund] PRIMARY KEY CLUSTERED 
(
	[IdMutualFund] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PaymentPeriod]    Script Date: 3/17/2019 9:48:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PaymentPeriod](
	[IdPaymentPeriod] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](50) NOT NULL,
	[Days] [int] NOT NULL,
 CONSTRAINT [PK_PaymentPeriod] PRIMARY KEY CLUSTERED 
(
	[IdPaymentPeriod] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RentType]    Script Date: 3/17/2019 9:48:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RentType](
	[IdRentType] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](50) NOT NULL,
 CONSTRAINT [PK_RentType] PRIMARY KEY CLUSTERED 
(
	[IdRentType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RolePermissions]    Script Date: 3/17/2019 9:48:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RolePermissions](
	[RolePermissionId] [bigint] IDENTITY(1,1) NOT NULL,
	[RoleId] [int] NOT NULL,
	[PermissionKey] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_RolePermissions] PRIMARY KEY CLUSTERED 
(
	[RolePermissionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 3/17/2019 9:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Setting]    Script Date: 3/17/2019 9:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Setting](
	[IdSetting] [int] IDENTITY(1,1) NOT NULL,
	[SettingName] [varchar](50) NOT NULL,
	[SettingValue] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Setting] PRIMARY KEY CLUSTERED 
(
	[IdSetting] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Title]    Script Date: 3/17/2019 9:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Title](
	[IdTitle] [int] IDENTITY(1,1) NOT NULL,
	[AmortizationDate] [date] NOT NULL,
	[AmortizationAmmount] [float] NOT NULL,
	[RentDate] [date] NOT NULL,
	[RentAmmount] [float] NOT NULL,
	[Price] [float] NOT NULL,
	[IdPaymentPeriod] [int] NOT NULL,
	[StartDate] [date] NOT NULL,
	[EndDate] [date] NOT NULL,
	[IdCurrency] [int] NOT NULL,
	[IdTitleType] [int] NOT NULL,
	[Symbol] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[IdBondType] [int] NOT NULL,
	[IdRentType] [int] NOT NULL,
	[TIR] [float] NULL,
	[MinimumQuantity] [int] NOT NULL,
	[IdBondRating] [int] NULL,
 CONSTRAINT [PK_Title] PRIMARY KEY CLUSTERED 
(
	[IdTitle] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TitleType]    Script Date: 3/17/2019 9:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TitleType](
	[IdTitleType] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](50) NOT NULL,
 CONSTRAINT [PK_TitleType] PRIMARY KEY CLUSTERED 
(
	[IdTitleType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserPermissions]    Script Date: 3/17/2019 9:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserPermissions](
	[UserPermissionId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[PermissionKey] [nvarchar](100) NOT NULL,
	[Granted] [bit] NOT NULL,
 CONSTRAINT [PK_UserPermissions] PRIMARY KEY CLUSTERED 
(
	[UserPermissionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserPreferences]    Script Date: 3/17/2019 9:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserPreferences](
	[UserPreferenceId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [bigint] NOT NULL,
	[PreferenceType] [nvarchar](100) NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_UserPreferences] PRIMARY KEY CLUSTERED 
(
	[UserPreferenceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRoles]    Script Date: 3/17/2019 9:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRoles](
	[UserRoleId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_UserRoles] PRIMARY KEY CLUSTERED 
(
	[UserRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 3/17/2019 9:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](100) NOT NULL,
	[DisplayName] [nvarchar](100) NOT NULL,
	[Email] [nvarchar](100) NULL,
	[Source] [nvarchar](4) NOT NULL,
	[PasswordHash] [nvarchar](86) NOT NULL,
	[PasswordSalt] [nvarchar](10) NOT NULL,
	[LastDirectoryUpdate] [datetime] NULL,
	[UserImage] [nvarchar](100) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VersionInfo]    Script Date: 3/17/2019 9:48:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VersionInfo](
	[Version] [bigint] NOT NULL,
	[AppliedOn] [datetime] NULL,
	[Description] [nvarchar](1024) NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompanyManager] ADD  DEFAULT ((0)) FOR [ExternalId]
GO
ALTER TABLE [dbo].[Currency] ADD  DEFAULT ('$') FOR [Symbol]
GO
ALTER TABLE [dbo].[Currency] ADD  DEFAULT ((0)) FOR [Rate]
GO
ALTER TABLE [dbo].[Exceptions] ADD  CONSTRAINT [DF_Exceptions_IsProtected]  DEFAULT ((1)) FOR [IsProtected]
GO
ALTER TABLE [dbo].[Exceptions] ADD  CONSTRAINT [DF_Exceptions_DuplicateCount]  DEFAULT ((1)) FOR [DuplicateCount]
GO
ALTER TABLE [dbo].[PaymentPeriod] ADD  DEFAULT ((0)) FOR [Days]
GO
ALTER TABLE [dbo].[Title] ADD  DEFAULT ((0)) FOR [TIR]
GO
ALTER TABLE [dbo].[Title] ADD  DEFAULT ((0)) FOR [MinimumQuantity]
GO
ALTER TABLE [dbo].[UserPermissions] ADD  CONSTRAINT [DF_UserPermissions_Granted]  DEFAULT ((1)) FOR [Granted]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Caution]  WITH CHECK ADD  CONSTRAINT [FK_Caution_Currency] FOREIGN KEY([IdCurrency])
REFERENCES [dbo].[Currency] ([IdCurrency])
GO
ALTER TABLE [dbo].[Caution] CHECK CONSTRAINT [FK_Caution_Currency]
GO
ALTER TABLE [dbo].[MutualFund]  WITH CHECK ADD  CONSTRAINT [FK_MutualFund_CompanyManager] FOREIGN KEY([IdCompanyManager])
REFERENCES [dbo].[CompanyManager] ([IdCompanyManager])
GO
ALTER TABLE [dbo].[MutualFund] CHECK CONSTRAINT [FK_MutualFund_CompanyManager]
GO
ALTER TABLE [dbo].[MutualFund]  WITH CHECK ADD  CONSTRAINT [FK_MutualFund_Currency] FOREIGN KEY([IdCurrency])
REFERENCES [dbo].[Currency] ([IdCurrency])
GO
ALTER TABLE [dbo].[MutualFund] CHECK CONSTRAINT [FK_MutualFund_Currency]
GO
ALTER TABLE [dbo].[MutualFund]  WITH CHECK ADD  CONSTRAINT [FK_MutualFund_InvestmentHorizon] FOREIGN KEY([IdInvestmentHorizon])
REFERENCES [dbo].[InvestmentHorizon] ([IdInvestmentHorizon])
GO
ALTER TABLE [dbo].[MutualFund] CHECK CONSTRAINT [FK_MutualFund_InvestmentHorizon]
GO
ALTER TABLE [dbo].[RolePermissions]  WITH CHECK ADD  CONSTRAINT [FK_RolePermissions_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO
ALTER TABLE [dbo].[RolePermissions] CHECK CONSTRAINT [FK_RolePermissions_RoleId]
GO
ALTER TABLE [dbo].[Title]  WITH CHECK ADD  CONSTRAINT [FK_Title_BondRating] FOREIGN KEY([IdBondRating])
REFERENCES [dbo].[BondRating] ([IdBondRating])
GO
ALTER TABLE [dbo].[Title] CHECK CONSTRAINT [FK_Title_BondRating]
GO
ALTER TABLE [dbo].[Title]  WITH CHECK ADD  CONSTRAINT [FK_Title_BondType] FOREIGN KEY([IdBondType])
REFERENCES [dbo].[BondType] ([IdBondType])
GO
ALTER TABLE [dbo].[Title] CHECK CONSTRAINT [FK_Title_BondType]
GO
ALTER TABLE [dbo].[Title]  WITH CHECK ADD  CONSTRAINT [FK_Title_currency] FOREIGN KEY([IdCurrency])
REFERENCES [dbo].[Currency] ([IdCurrency])
GO
ALTER TABLE [dbo].[Title] CHECK CONSTRAINT [FK_Title_currency]
GO
ALTER TABLE [dbo].[Title]  WITH CHECK ADD  CONSTRAINT [FK_Title_PaymentPeriod] FOREIGN KEY([IdPaymentPeriod])
REFERENCES [dbo].[PaymentPeriod] ([IdPaymentPeriod])
GO
ALTER TABLE [dbo].[Title] CHECK CONSTRAINT [FK_Title_PaymentPeriod]
GO
ALTER TABLE [dbo].[Title]  WITH CHECK ADD  CONSTRAINT [FK_Title_RentType] FOREIGN KEY([IdRentType])
REFERENCES [dbo].[RentType] ([IdRentType])
GO
ALTER TABLE [dbo].[Title] CHECK CONSTRAINT [FK_Title_RentType]
GO
ALTER TABLE [dbo].[Title]  WITH CHECK ADD  CONSTRAINT [FK_Title_TitleType] FOREIGN KEY([IdTitleType])
REFERENCES [dbo].[TitleType] ([IdTitleType])
GO
ALTER TABLE [dbo].[Title] CHECK CONSTRAINT [FK_Title_TitleType]
GO
ALTER TABLE [dbo].[UserPermissions]  WITH CHECK ADD  CONSTRAINT [FK_UserPermissions_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[UserPermissions] CHECK CONSTRAINT [FK_UserPermissions_UserId]
GO
ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_RoleId]
GO
ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_UserId]
GO
