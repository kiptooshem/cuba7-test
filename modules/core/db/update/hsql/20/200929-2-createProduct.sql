alter table CUBA7_PRODUCT add constraint FK_CUBA7_PRODUCT_ON_IMAGE foreign key (IMAGE_ID) references SYS_FILE(ID);
create index IDX_CUBA7_PRODUCT_ON_IMAGE on CUBA7_PRODUCT (IMAGE_ID);
