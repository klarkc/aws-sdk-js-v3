"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand = exports.serializeAws_json1_1ExecuteProvisionedProductPlanCommand = exports.serializeAws_json1_1EnableAWSOrganizationsAccessCommand = exports.serializeAws_json1_1DisassociateTagOptionFromResourceCommand = exports.serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand = exports.serializeAws_json1_1DisassociateProductFromPortfolioCommand = exports.serializeAws_json1_1DisassociatePrincipalFromPortfolioCommand = exports.serializeAws_json1_1DisassociateBudgetFromResourceCommand = exports.serializeAws_json1_1DisableAWSOrganizationsAccessCommand = exports.serializeAws_json1_1DescribeTagOptionCommand = exports.serializeAws_json1_1DescribeServiceActionExecutionParametersCommand = exports.serializeAws_json1_1DescribeServiceActionCommand = exports.serializeAws_json1_1DescribeRecordCommand = exports.serializeAws_json1_1DescribeProvisioningParametersCommand = exports.serializeAws_json1_1DescribeProvisioningArtifactCommand = exports.serializeAws_json1_1DescribeProvisionedProductPlanCommand = exports.serializeAws_json1_1DescribeProvisionedProductCommand = exports.serializeAws_json1_1DescribeProductViewCommand = exports.serializeAws_json1_1DescribeProductAsAdminCommand = exports.serializeAws_json1_1DescribeProductCommand = exports.serializeAws_json1_1DescribePortfolioShareStatusCommand = exports.serializeAws_json1_1DescribePortfolioSharesCommand = exports.serializeAws_json1_1DescribePortfolioCommand = exports.serializeAws_json1_1DescribeCopyProductStatusCommand = exports.serializeAws_json1_1DescribeConstraintCommand = exports.serializeAws_json1_1DeleteTagOptionCommand = exports.serializeAws_json1_1DeleteServiceActionCommand = exports.serializeAws_json1_1DeleteProvisioningArtifactCommand = exports.serializeAws_json1_1DeleteProvisionedProductPlanCommand = exports.serializeAws_json1_1DeleteProductCommand = exports.serializeAws_json1_1DeletePortfolioShareCommand = exports.serializeAws_json1_1DeletePortfolioCommand = exports.serializeAws_json1_1DeleteConstraintCommand = exports.serializeAws_json1_1CreateTagOptionCommand = exports.serializeAws_json1_1CreateServiceActionCommand = exports.serializeAws_json1_1CreateProvisioningArtifactCommand = exports.serializeAws_json1_1CreateProvisionedProductPlanCommand = exports.serializeAws_json1_1CreateProductCommand = exports.serializeAws_json1_1CreatePortfolioShareCommand = exports.serializeAws_json1_1CreatePortfolioCommand = exports.serializeAws_json1_1CreateConstraintCommand = exports.serializeAws_json1_1CopyProductCommand = exports.serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand = exports.serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand = exports.serializeAws_json1_1AssociateTagOptionWithResourceCommand = exports.serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand = exports.serializeAws_json1_1AssociateProductWithPortfolioCommand = exports.serializeAws_json1_1AssociatePrincipalWithPortfolioCommand = exports.serializeAws_json1_1AssociateBudgetWithResourceCommand = exports.serializeAws_json1_1AcceptPortfolioShareCommand = void 0;
exports.deserializeAws_json1_1CreateProductCommand = exports.deserializeAws_json1_1CreatePortfolioShareCommand = exports.deserializeAws_json1_1CreatePortfolioCommand = exports.deserializeAws_json1_1CreateConstraintCommand = exports.deserializeAws_json1_1CopyProductCommand = exports.deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand = exports.deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand = exports.deserializeAws_json1_1AssociateTagOptionWithResourceCommand = exports.deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand = exports.deserializeAws_json1_1AssociateProductWithPortfolioCommand = exports.deserializeAws_json1_1AssociatePrincipalWithPortfolioCommand = exports.deserializeAws_json1_1AssociateBudgetWithResourceCommand = exports.deserializeAws_json1_1AcceptPortfolioShareCommand = exports.serializeAws_json1_1UpdateTagOptionCommand = exports.serializeAws_json1_1UpdateServiceActionCommand = exports.serializeAws_json1_1UpdateProvisioningArtifactCommand = exports.serializeAws_json1_1UpdateProvisionedProductPropertiesCommand = exports.serializeAws_json1_1UpdateProvisionedProductCommand = exports.serializeAws_json1_1UpdateProductCommand = exports.serializeAws_json1_1UpdatePortfolioShareCommand = exports.serializeAws_json1_1UpdatePortfolioCommand = exports.serializeAws_json1_1UpdateConstraintCommand = exports.serializeAws_json1_1TerminateProvisionedProductCommand = exports.serializeAws_json1_1SearchProvisionedProductsCommand = exports.serializeAws_json1_1SearchProductsAsAdminCommand = exports.serializeAws_json1_1SearchProductsCommand = exports.serializeAws_json1_1ScanProvisionedProductsCommand = exports.serializeAws_json1_1RejectPortfolioShareCommand = exports.serializeAws_json1_1ProvisionProductCommand = exports.serializeAws_json1_1ListTagOptionsCommand = exports.serializeAws_json1_1ListStackInstancesForProvisionedProductCommand = exports.serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand = exports.serializeAws_json1_1ListServiceActionsCommand = exports.serializeAws_json1_1ListResourcesForTagOptionCommand = exports.serializeAws_json1_1ListRecordHistoryCommand = exports.serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand = exports.serializeAws_json1_1ListProvisioningArtifactsCommand = exports.serializeAws_json1_1ListProvisionedProductPlansCommand = exports.serializeAws_json1_1ListPrincipalsForPortfolioCommand = exports.serializeAws_json1_1ListPortfoliosForProductCommand = exports.serializeAws_json1_1ListPortfoliosCommand = exports.serializeAws_json1_1ListPortfolioAccessCommand = exports.serializeAws_json1_1ListOrganizationPortfolioAccessCommand = exports.serializeAws_json1_1ListLaunchPathsCommand = exports.serializeAws_json1_1ListConstraintsForPortfolioCommand = exports.serializeAws_json1_1ListBudgetsForResourceCommand = exports.serializeAws_json1_1ListAcceptedPortfolioSharesCommand = exports.serializeAws_json1_1ImportAsProvisionedProductCommand = exports.serializeAws_json1_1GetProvisionedProductOutputsCommand = exports.serializeAws_json1_1GetAWSOrganizationsAccessStatusCommand = void 0;
exports.deserializeAws_json1_1ListProvisionedProductPlansCommand = exports.deserializeAws_json1_1ListPrincipalsForPortfolioCommand = exports.deserializeAws_json1_1ListPortfoliosForProductCommand = exports.deserializeAws_json1_1ListPortfoliosCommand = exports.deserializeAws_json1_1ListPortfolioAccessCommand = exports.deserializeAws_json1_1ListOrganizationPortfolioAccessCommand = exports.deserializeAws_json1_1ListLaunchPathsCommand = exports.deserializeAws_json1_1ListConstraintsForPortfolioCommand = exports.deserializeAws_json1_1ListBudgetsForResourceCommand = exports.deserializeAws_json1_1ListAcceptedPortfolioSharesCommand = exports.deserializeAws_json1_1ImportAsProvisionedProductCommand = exports.deserializeAws_json1_1GetProvisionedProductOutputsCommand = exports.deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommand = exports.deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand = exports.deserializeAws_json1_1ExecuteProvisionedProductPlanCommand = exports.deserializeAws_json1_1EnableAWSOrganizationsAccessCommand = exports.deserializeAws_json1_1DisassociateTagOptionFromResourceCommand = exports.deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand = exports.deserializeAws_json1_1DisassociateProductFromPortfolioCommand = exports.deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommand = exports.deserializeAws_json1_1DisassociateBudgetFromResourceCommand = exports.deserializeAws_json1_1DisableAWSOrganizationsAccessCommand = exports.deserializeAws_json1_1DescribeTagOptionCommand = exports.deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand = exports.deserializeAws_json1_1DescribeServiceActionCommand = exports.deserializeAws_json1_1DescribeRecordCommand = exports.deserializeAws_json1_1DescribeProvisioningParametersCommand = exports.deserializeAws_json1_1DescribeProvisioningArtifactCommand = exports.deserializeAws_json1_1DescribeProvisionedProductPlanCommand = exports.deserializeAws_json1_1DescribeProvisionedProductCommand = exports.deserializeAws_json1_1DescribeProductViewCommand = exports.deserializeAws_json1_1DescribeProductAsAdminCommand = exports.deserializeAws_json1_1DescribeProductCommand = exports.deserializeAws_json1_1DescribePortfolioShareStatusCommand = exports.deserializeAws_json1_1DescribePortfolioSharesCommand = exports.deserializeAws_json1_1DescribePortfolioCommand = exports.deserializeAws_json1_1DescribeCopyProductStatusCommand = exports.deserializeAws_json1_1DescribeConstraintCommand = exports.deserializeAws_json1_1DeleteTagOptionCommand = exports.deserializeAws_json1_1DeleteServiceActionCommand = exports.deserializeAws_json1_1DeleteProvisioningArtifactCommand = exports.deserializeAws_json1_1DeleteProvisionedProductPlanCommand = exports.deserializeAws_json1_1DeleteProductCommand = exports.deserializeAws_json1_1DeletePortfolioShareCommand = exports.deserializeAws_json1_1DeletePortfolioCommand = exports.deserializeAws_json1_1DeleteConstraintCommand = exports.deserializeAws_json1_1CreateTagOptionCommand = exports.deserializeAws_json1_1CreateServiceActionCommand = exports.deserializeAws_json1_1CreateProvisioningArtifactCommand = exports.deserializeAws_json1_1CreateProvisionedProductPlanCommand = void 0;
exports.deserializeAws_json1_1UpdateTagOptionCommand = exports.deserializeAws_json1_1UpdateServiceActionCommand = exports.deserializeAws_json1_1UpdateProvisioningArtifactCommand = exports.deserializeAws_json1_1UpdateProvisionedProductPropertiesCommand = exports.deserializeAws_json1_1UpdateProvisionedProductCommand = exports.deserializeAws_json1_1UpdateProductCommand = exports.deserializeAws_json1_1UpdatePortfolioShareCommand = exports.deserializeAws_json1_1UpdatePortfolioCommand = exports.deserializeAws_json1_1UpdateConstraintCommand = exports.deserializeAws_json1_1TerminateProvisionedProductCommand = exports.deserializeAws_json1_1SearchProvisionedProductsCommand = exports.deserializeAws_json1_1SearchProductsAsAdminCommand = exports.deserializeAws_json1_1SearchProductsCommand = exports.deserializeAws_json1_1ScanProvisionedProductsCommand = exports.deserializeAws_json1_1RejectPortfolioShareCommand = exports.deserializeAws_json1_1ProvisionProductCommand = exports.deserializeAws_json1_1ListTagOptionsCommand = exports.deserializeAws_json1_1ListStackInstancesForProvisionedProductCommand = exports.deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand = exports.deserializeAws_json1_1ListServiceActionsCommand = exports.deserializeAws_json1_1ListResourcesForTagOptionCommand = exports.deserializeAws_json1_1ListRecordHistoryCommand = exports.deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand = exports.deserializeAws_json1_1ListProvisioningArtifactsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_1AcceptPortfolioShareCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.AcceptPortfolioShare",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AcceptPortfolioShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AcceptPortfolioShareCommand = serializeAws_json1_1AcceptPortfolioShareCommand;
const serializeAws_json1_1AssociateBudgetWithResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.AssociateBudgetWithResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateBudgetWithResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateBudgetWithResourceCommand = serializeAws_json1_1AssociateBudgetWithResourceCommand;
const serializeAws_json1_1AssociatePrincipalWithPortfolioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociatePrincipalWithPortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociatePrincipalWithPortfolioCommand = serializeAws_json1_1AssociatePrincipalWithPortfolioCommand;
const serializeAws_json1_1AssociateProductWithPortfolioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.AssociateProductWithPortfolio",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateProductWithPortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateProductWithPortfolioCommand = serializeAws_json1_1AssociateProductWithPortfolioCommand;
const serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand = serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand;
const serializeAws_json1_1AssociateTagOptionWithResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.AssociateTagOptionWithResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateTagOptionWithResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateTagOptionWithResourceCommand = serializeAws_json1_1AssociateTagOptionWithResourceCommand;
const serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand = serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand;
const serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand = serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand;
const serializeAws_json1_1CopyProductCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.CopyProduct",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CopyProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CopyProductCommand = serializeAws_json1_1CopyProductCommand;
const serializeAws_json1_1CreateConstraintCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.CreateConstraint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateConstraintInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateConstraintCommand = serializeAws_json1_1CreateConstraintCommand;
const serializeAws_json1_1CreatePortfolioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.CreatePortfolio",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePortfolioCommand = serializeAws_json1_1CreatePortfolioCommand;
const serializeAws_json1_1CreatePortfolioShareCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.CreatePortfolioShare",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePortfolioShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePortfolioShareCommand = serializeAws_json1_1CreatePortfolioShareCommand;
const serializeAws_json1_1CreateProductCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.CreateProduct",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateProductCommand = serializeAws_json1_1CreateProductCommand;
const serializeAws_json1_1CreateProvisionedProductPlanCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.CreateProvisionedProductPlan",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProvisionedProductPlanInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateProvisionedProductPlanCommand = serializeAws_json1_1CreateProvisionedProductPlanCommand;
const serializeAws_json1_1CreateProvisioningArtifactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.CreateProvisioningArtifact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateProvisioningArtifactCommand = serializeAws_json1_1CreateProvisioningArtifactCommand;
const serializeAws_json1_1CreateServiceActionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.CreateServiceAction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateServiceActionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateServiceActionCommand = serializeAws_json1_1CreateServiceActionCommand;
const serializeAws_json1_1CreateTagOptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.CreateTagOption",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTagOptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTagOptionCommand = serializeAws_json1_1CreateTagOptionCommand;
const serializeAws_json1_1DeleteConstraintCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DeleteConstraint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConstraintInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteConstraintCommand = serializeAws_json1_1DeleteConstraintCommand;
const serializeAws_json1_1DeletePortfolioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DeletePortfolio",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePortfolioCommand = serializeAws_json1_1DeletePortfolioCommand;
const serializeAws_json1_1DeletePortfolioShareCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DeletePortfolioShare",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePortfolioShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePortfolioShareCommand = serializeAws_json1_1DeletePortfolioShareCommand;
const serializeAws_json1_1DeleteProductCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DeleteProduct",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteProductCommand = serializeAws_json1_1DeleteProductCommand;
const serializeAws_json1_1DeleteProvisionedProductPlanCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DeleteProvisionedProductPlan",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProvisionedProductPlanInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteProvisionedProductPlanCommand = serializeAws_json1_1DeleteProvisionedProductPlanCommand;
const serializeAws_json1_1DeleteProvisioningArtifactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DeleteProvisioningArtifact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteProvisioningArtifactCommand = serializeAws_json1_1DeleteProvisioningArtifactCommand;
const serializeAws_json1_1DeleteServiceActionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DeleteServiceAction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteServiceActionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteServiceActionCommand = serializeAws_json1_1DeleteServiceActionCommand;
const serializeAws_json1_1DeleteTagOptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DeleteTagOption",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTagOptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTagOptionCommand = serializeAws_json1_1DeleteTagOptionCommand;
const serializeAws_json1_1DescribeConstraintCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribeConstraint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConstraintInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConstraintCommand = serializeAws_json1_1DescribeConstraintCommand;
const serializeAws_json1_1DescribeCopyProductStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribeCopyProductStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCopyProductStatusInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCopyProductStatusCommand = serializeAws_json1_1DescribeCopyProductStatusCommand;
const serializeAws_json1_1DescribePortfolioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribePortfolio",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePortfolioCommand = serializeAws_json1_1DescribePortfolioCommand;
const serializeAws_json1_1DescribePortfolioSharesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribePortfolioShares",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePortfolioSharesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePortfolioSharesCommand = serializeAws_json1_1DescribePortfolioSharesCommand;
const serializeAws_json1_1DescribePortfolioShareStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribePortfolioShareStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePortfolioShareStatusInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePortfolioShareStatusCommand = serializeAws_json1_1DescribePortfolioShareStatusCommand;
const serializeAws_json1_1DescribeProductCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribeProduct",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeProductCommand = serializeAws_json1_1DescribeProductCommand;
const serializeAws_json1_1DescribeProductAsAdminCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribeProductAsAdmin",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProductAsAdminInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeProductAsAdminCommand = serializeAws_json1_1DescribeProductAsAdminCommand;
const serializeAws_json1_1DescribeProductViewCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribeProductView",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProductViewInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeProductViewCommand = serializeAws_json1_1DescribeProductViewCommand;
const serializeAws_json1_1DescribeProvisionedProductCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribeProvisionedProduct",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProvisionedProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeProvisionedProductCommand = serializeAws_json1_1DescribeProvisionedProductCommand;
const serializeAws_json1_1DescribeProvisionedProductPlanCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribeProvisionedProductPlan",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProvisionedProductPlanInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeProvisionedProductPlanCommand = serializeAws_json1_1DescribeProvisionedProductPlanCommand;
const serializeAws_json1_1DescribeProvisioningArtifactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribeProvisioningArtifact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeProvisioningArtifactCommand = serializeAws_json1_1DescribeProvisioningArtifactCommand;
const serializeAws_json1_1DescribeProvisioningParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribeProvisioningParameters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProvisioningParametersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeProvisioningParametersCommand = serializeAws_json1_1DescribeProvisioningParametersCommand;
const serializeAws_json1_1DescribeRecordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribeRecord",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRecordInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRecordCommand = serializeAws_json1_1DescribeRecordCommand;
const serializeAws_json1_1DescribeServiceActionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribeServiceAction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeServiceActionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeServiceActionCommand = serializeAws_json1_1DescribeServiceActionCommand;
const serializeAws_json1_1DescribeServiceActionExecutionParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeServiceActionExecutionParametersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeServiceActionExecutionParametersCommand = serializeAws_json1_1DescribeServiceActionExecutionParametersCommand;
const serializeAws_json1_1DescribeTagOptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DescribeTagOption",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTagOptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTagOptionCommand = serializeAws_json1_1DescribeTagOptionCommand;
const serializeAws_json1_1DisableAWSOrganizationsAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DisableAWSOrganizationsAccess",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableAWSOrganizationsAccessInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableAWSOrganizationsAccessCommand = serializeAws_json1_1DisableAWSOrganizationsAccessCommand;
const serializeAws_json1_1DisassociateBudgetFromResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DisassociateBudgetFromResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateBudgetFromResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateBudgetFromResourceCommand = serializeAws_json1_1DisassociateBudgetFromResourceCommand;
const serializeAws_json1_1DisassociatePrincipalFromPortfolioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociatePrincipalFromPortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociatePrincipalFromPortfolioCommand = serializeAws_json1_1DisassociatePrincipalFromPortfolioCommand;
const serializeAws_json1_1DisassociateProductFromPortfolioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DisassociateProductFromPortfolio",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateProductFromPortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateProductFromPortfolioCommand = serializeAws_json1_1DisassociateProductFromPortfolioCommand;
const serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand = serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand;
const serializeAws_json1_1DisassociateTagOptionFromResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.DisassociateTagOptionFromResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateTagOptionFromResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateTagOptionFromResourceCommand = serializeAws_json1_1DisassociateTagOptionFromResourceCommand;
const serializeAws_json1_1EnableAWSOrganizationsAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.EnableAWSOrganizationsAccess",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableAWSOrganizationsAccessInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableAWSOrganizationsAccessCommand = serializeAws_json1_1EnableAWSOrganizationsAccessCommand;
const serializeAws_json1_1ExecuteProvisionedProductPlanCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ExecuteProvisionedProductPlan",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ExecuteProvisionedProductPlanInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ExecuteProvisionedProductPlanCommand = serializeAws_json1_1ExecuteProvisionedProductPlanCommand;
const serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ExecuteProvisionedProductServiceActionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand = serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand;
const serializeAws_json1_1GetAWSOrganizationsAccessStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAWSOrganizationsAccessStatusInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAWSOrganizationsAccessStatusCommand = serializeAws_json1_1GetAWSOrganizationsAccessStatusCommand;
const serializeAws_json1_1GetProvisionedProductOutputsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.GetProvisionedProductOutputs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetProvisionedProductOutputsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetProvisionedProductOutputsCommand = serializeAws_json1_1GetProvisionedProductOutputsCommand;
const serializeAws_json1_1ImportAsProvisionedProductCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ImportAsProvisionedProduct",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportAsProvisionedProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ImportAsProvisionedProductCommand = serializeAws_json1_1ImportAsProvisionedProductCommand;
const serializeAws_json1_1ListAcceptedPortfolioSharesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListAcceptedPortfolioShares",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAcceptedPortfolioSharesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAcceptedPortfolioSharesCommand = serializeAws_json1_1ListAcceptedPortfolioSharesCommand;
const serializeAws_json1_1ListBudgetsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListBudgetsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBudgetsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListBudgetsForResourceCommand = serializeAws_json1_1ListBudgetsForResourceCommand;
const serializeAws_json1_1ListConstraintsForPortfolioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListConstraintsForPortfolio",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListConstraintsForPortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListConstraintsForPortfolioCommand = serializeAws_json1_1ListConstraintsForPortfolioCommand;
const serializeAws_json1_1ListLaunchPathsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListLaunchPaths",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLaunchPathsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLaunchPathsCommand = serializeAws_json1_1ListLaunchPathsCommand;
const serializeAws_json1_1ListOrganizationPortfolioAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListOrganizationPortfolioAccess",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOrganizationPortfolioAccessInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListOrganizationPortfolioAccessCommand = serializeAws_json1_1ListOrganizationPortfolioAccessCommand;
const serializeAws_json1_1ListPortfolioAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListPortfolioAccess",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPortfolioAccessInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPortfolioAccessCommand = serializeAws_json1_1ListPortfolioAccessCommand;
const serializeAws_json1_1ListPortfoliosCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListPortfolios",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPortfoliosInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPortfoliosCommand = serializeAws_json1_1ListPortfoliosCommand;
const serializeAws_json1_1ListPortfoliosForProductCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListPortfoliosForProduct",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPortfoliosForProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPortfoliosForProductCommand = serializeAws_json1_1ListPortfoliosForProductCommand;
const serializeAws_json1_1ListPrincipalsForPortfolioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListPrincipalsForPortfolio",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPrincipalsForPortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPrincipalsForPortfolioCommand = serializeAws_json1_1ListPrincipalsForPortfolioCommand;
const serializeAws_json1_1ListProvisionedProductPlansCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListProvisionedProductPlans",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProvisionedProductPlansInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListProvisionedProductPlansCommand = serializeAws_json1_1ListProvisionedProductPlansCommand;
const serializeAws_json1_1ListProvisioningArtifactsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListProvisioningArtifacts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProvisioningArtifactsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListProvisioningArtifactsCommand = serializeAws_json1_1ListProvisioningArtifactsCommand;
const serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProvisioningArtifactsForServiceActionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand = serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand;
const serializeAws_json1_1ListRecordHistoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListRecordHistory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRecordHistoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRecordHistoryCommand = serializeAws_json1_1ListRecordHistoryCommand;
const serializeAws_json1_1ListResourcesForTagOptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListResourcesForTagOption",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourcesForTagOptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResourcesForTagOptionCommand = serializeAws_json1_1ListResourcesForTagOptionCommand;
const serializeAws_json1_1ListServiceActionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListServiceActions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServiceActionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListServiceActionsCommand = serializeAws_json1_1ListServiceActionsCommand;
const serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServiceActionsForProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand = serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand;
const serializeAws_json1_1ListStackInstancesForProvisionedProductCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListStackInstancesForProvisionedProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListStackInstancesForProvisionedProductCommand = serializeAws_json1_1ListStackInstancesForProvisionedProductCommand;
const serializeAws_json1_1ListTagOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ListTagOptions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagOptionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagOptionsCommand = serializeAws_json1_1ListTagOptionsCommand;
const serializeAws_json1_1ProvisionProductCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ProvisionProduct",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ProvisionProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ProvisionProductCommand = serializeAws_json1_1ProvisionProductCommand;
const serializeAws_json1_1RejectPortfolioShareCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.RejectPortfolioShare",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RejectPortfolioShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RejectPortfolioShareCommand = serializeAws_json1_1RejectPortfolioShareCommand;
const serializeAws_json1_1ScanProvisionedProductsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.ScanProvisionedProducts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ScanProvisionedProductsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ScanProvisionedProductsCommand = serializeAws_json1_1ScanProvisionedProductsCommand;
const serializeAws_json1_1SearchProductsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.SearchProducts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchProductsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchProductsCommand = serializeAws_json1_1SearchProductsCommand;
const serializeAws_json1_1SearchProductsAsAdminCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.SearchProductsAsAdmin",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchProductsAsAdminInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchProductsAsAdminCommand = serializeAws_json1_1SearchProductsAsAdminCommand;
const serializeAws_json1_1SearchProvisionedProductsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.SearchProvisionedProducts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchProvisionedProductsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchProvisionedProductsCommand = serializeAws_json1_1SearchProvisionedProductsCommand;
const serializeAws_json1_1TerminateProvisionedProductCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.TerminateProvisionedProduct",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TerminateProvisionedProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TerminateProvisionedProductCommand = serializeAws_json1_1TerminateProvisionedProductCommand;
const serializeAws_json1_1UpdateConstraintCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.UpdateConstraint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateConstraintInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateConstraintCommand = serializeAws_json1_1UpdateConstraintCommand;
const serializeAws_json1_1UpdatePortfolioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.UpdatePortfolio",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdatePortfolioCommand = serializeAws_json1_1UpdatePortfolioCommand;
const serializeAws_json1_1UpdatePortfolioShareCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.UpdatePortfolioShare",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePortfolioShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdatePortfolioShareCommand = serializeAws_json1_1UpdatePortfolioShareCommand;
const serializeAws_json1_1UpdateProductCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.UpdateProduct",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateProductCommand = serializeAws_json1_1UpdateProductCommand;
const serializeAws_json1_1UpdateProvisionedProductCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.UpdateProvisionedProduct",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProvisionedProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateProvisionedProductCommand = serializeAws_json1_1UpdateProvisionedProductCommand;
const serializeAws_json1_1UpdateProvisionedProductPropertiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.UpdateProvisionedProductProperties",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProvisionedProductPropertiesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateProvisionedProductPropertiesCommand = serializeAws_json1_1UpdateProvisionedProductPropertiesCommand;
const serializeAws_json1_1UpdateProvisioningArtifactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.UpdateProvisioningArtifact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateProvisioningArtifactCommand = serializeAws_json1_1UpdateProvisioningArtifactCommand;
const serializeAws_json1_1UpdateServiceActionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.UpdateServiceAction",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServiceActionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateServiceActionCommand = serializeAws_json1_1UpdateServiceActionCommand;
const serializeAws_json1_1UpdateTagOptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWS242ServiceCatalogService.UpdateTagOption",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTagOptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateTagOptionCommand = serializeAws_json1_1UpdateTagOptionCommand;
const deserializeAws_json1_1AcceptPortfolioShareCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AcceptPortfolioShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcceptPortfolioShareOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AcceptPortfolioShareCommand = deserializeAws_json1_1AcceptPortfolioShareCommand;
const deserializeAws_json1_1AcceptPortfolioShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.servicecatalog#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateBudgetWithResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateBudgetWithResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateBudgetWithResourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateBudgetWithResourceCommand = deserializeAws_json1_1AssociateBudgetWithResourceCommand;
const deserializeAws_json1_1AssociateBudgetWithResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.servicecatalog#DuplicateResourceException":
            response = {
                ...(await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.servicecatalog#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociatePrincipalWithPortfolioCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociatePrincipalWithPortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociatePrincipalWithPortfolioOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociatePrincipalWithPortfolioCommand = deserializeAws_json1_1AssociatePrincipalWithPortfolioCommand;
const deserializeAws_json1_1AssociatePrincipalWithPortfolioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.servicecatalog#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateProductWithPortfolioCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateProductWithPortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateProductWithPortfolioOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateProductWithPortfolioCommand = deserializeAws_json1_1AssociateProductWithPortfolioCommand;
const deserializeAws_json1_1AssociateProductWithPortfolioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.servicecatalog#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand = deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand;
const deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.servicecatalog#DuplicateResourceException":
            response = {
                ...(await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.servicecatalog#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateTagOptionWithResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateTagOptionWithResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateTagOptionWithResourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateTagOptionWithResourceCommand = deserializeAws_json1_1AssociateTagOptionWithResourceCommand;
const deserializeAws_json1_1AssociateTagOptionWithResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.servicecatalog#DuplicateResourceException":
            response = {
                ...(await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateException":
        case "com.amazonaws.servicecatalog#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.servicecatalog#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
            response = {
                ...(await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand = deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand;
const deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand = deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand;
const deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CopyProductCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CopyProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CopyProductOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CopyProductCommand = deserializeAws_json1_1CopyProductCommand;
const deserializeAws_json1_1CopyProductCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateConstraintCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateConstraintCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateConstraintOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateConstraintCommand = deserializeAws_json1_1CreateConstraintCommand;
const deserializeAws_json1_1CreateConstraintCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.servicecatalog#DuplicateResourceException":
            response = {
                ...(await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.servicecatalog#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreatePortfolioCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePortfolioOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePortfolioCommand = deserializeAws_json1_1CreatePortfolioCommand;
const deserializeAws_json1_1CreatePortfolioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.servicecatalog#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
            response = {
                ...(await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreatePortfolioShareCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePortfolioShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePortfolioShareOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePortfolioShareCommand = deserializeAws_json1_1CreatePortfolioShareCommand;
const deserializeAws_json1_1CreatePortfolioShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateException":
        case "com.amazonaws.servicecatalog#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.servicecatalog#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.servicecatalog#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateProductCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProductOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateProductCommand = deserializeAws_json1_1CreateProductCommand;
const deserializeAws_json1_1CreateProductCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.servicecatalog#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
            response = {
                ...(await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateProvisionedProductPlanCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateProvisionedProductPlanCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProvisionedProductPlanOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateProvisionedProductPlanCommand = deserializeAws_json1_1CreateProvisionedProductPlanCommand;
const deserializeAws_json1_1CreateProvisionedProductPlanCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateException":
        case "com.amazonaws.servicecatalog#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateProvisioningArtifactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProvisioningArtifactOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateProvisioningArtifactCommand = deserializeAws_json1_1CreateProvisioningArtifactCommand;
const deserializeAws_json1_1CreateProvisioningArtifactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.servicecatalog#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateServiceActionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateServiceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateServiceActionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateServiceActionCommand = deserializeAws_json1_1CreateServiceActionCommand;
const deserializeAws_json1_1CreateServiceActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.servicecatalog#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateTagOptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateTagOptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTagOptionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTagOptionCommand = deserializeAws_json1_1CreateTagOptionCommand;
const deserializeAws_json1_1CreateTagOptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.servicecatalog#DuplicateResourceException":
            response = {
                ...(await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.servicecatalog#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
            response = {
                ...(await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteConstraintCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteConstraintCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteConstraintOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteConstraintCommand = deserializeAws_json1_1DeleteConstraintCommand;
const deserializeAws_json1_1DeleteConstraintCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeletePortfolioCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeletePortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeletePortfolioOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePortfolioCommand = deserializeAws_json1_1DeletePortfolioCommand;
const deserializeAws_json1_1DeletePortfolioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.servicecatalog#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
            response = {
                ...(await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeletePortfolioShareCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeletePortfolioShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeletePortfolioShareOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePortfolioShareCommand = deserializeAws_json1_1DeletePortfolioShareCommand;
const deserializeAws_json1_1DeletePortfolioShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateException":
        case "com.amazonaws.servicecatalog#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.servicecatalog#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteProductCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProductOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteProductCommand = deserializeAws_json1_1DeleteProductCommand;
const deserializeAws_json1_1DeleteProductCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.servicecatalog#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
            response = {
                ...(await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteProvisionedProductPlanCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteProvisionedProductPlanCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProvisionedProductPlanOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteProvisionedProductPlanCommand = deserializeAws_json1_1DeleteProvisionedProductPlanCommand;
const deserializeAws_json1_1DeleteProvisionedProductPlanCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteProvisioningArtifactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProvisioningArtifactOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteProvisioningArtifactCommand = deserializeAws_json1_1DeleteProvisioningArtifactCommand;
const deserializeAws_json1_1DeleteProvisioningArtifactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.servicecatalog#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteServiceActionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteServiceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteServiceActionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteServiceActionCommand = deserializeAws_json1_1DeleteServiceActionCommand;
const deserializeAws_json1_1DeleteServiceActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceInUseException":
        case "com.amazonaws.servicecatalog#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteTagOptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTagOptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTagOptionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTagOptionCommand = deserializeAws_json1_1DeleteTagOptionCommand;
const deserializeAws_json1_1DeleteTagOptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceInUseException":
        case "com.amazonaws.servicecatalog#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
            response = {
                ...(await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeConstraintCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConstraintCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConstraintOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConstraintCommand = deserializeAws_json1_1DescribeConstraintCommand;
const deserializeAws_json1_1DescribeConstraintCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeCopyProductStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCopyProductStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCopyProductStatusOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCopyProductStatusCommand = deserializeAws_json1_1DescribeCopyProductStatusCommand;
const deserializeAws_json1_1DescribeCopyProductStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribePortfolioCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePortfolioOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePortfolioCommand = deserializeAws_json1_1DescribePortfolioCommand;
const deserializeAws_json1_1DescribePortfolioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribePortfolioSharesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePortfolioSharesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePortfolioSharesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePortfolioSharesCommand = deserializeAws_json1_1DescribePortfolioSharesCommand;
const deserializeAws_json1_1DescribePortfolioSharesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribePortfolioShareStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePortfolioShareStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePortfolioShareStatusOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePortfolioShareStatusCommand = deserializeAws_json1_1DescribePortfolioShareStatusCommand;
const deserializeAws_json1_1DescribePortfolioShareStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.servicecatalog#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeProductCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProductOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeProductCommand = deserializeAws_json1_1DescribeProductCommand;
const deserializeAws_json1_1DescribeProductCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeProductAsAdminCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeProductAsAdminCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProductAsAdminOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeProductAsAdminCommand = deserializeAws_json1_1DescribeProductAsAdminCommand;
const deserializeAws_json1_1DescribeProductAsAdminCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeProductViewCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeProductViewCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProductViewOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeProductViewCommand = deserializeAws_json1_1DescribeProductViewCommand;
const deserializeAws_json1_1DescribeProductViewCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeProvisionedProductCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeProvisionedProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProvisionedProductOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeProvisionedProductCommand = deserializeAws_json1_1DescribeProvisionedProductCommand;
const deserializeAws_json1_1DescribeProvisionedProductCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeProvisionedProductPlanCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeProvisionedProductPlanCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProvisionedProductPlanOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeProvisionedProductPlanCommand = deserializeAws_json1_1DescribeProvisionedProductPlanCommand;
const deserializeAws_json1_1DescribeProvisionedProductPlanCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeProvisioningArtifactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProvisioningArtifactOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeProvisioningArtifactCommand = deserializeAws_json1_1DescribeProvisioningArtifactCommand;
const deserializeAws_json1_1DescribeProvisioningArtifactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeProvisioningParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeProvisioningParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProvisioningParametersOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeProvisioningParametersCommand = deserializeAws_json1_1DescribeProvisioningParametersCommand;
const deserializeAws_json1_1DescribeProvisioningParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeRecordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRecordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRecordOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRecordCommand = deserializeAws_json1_1DescribeRecordCommand;
const deserializeAws_json1_1DescribeRecordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeServiceActionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeServiceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeServiceActionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeServiceActionCommand = deserializeAws_json1_1DescribeServiceActionCommand;
const deserializeAws_json1_1DescribeServiceActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeServiceActionExecutionParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeServiceActionExecutionParametersOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand = deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand;
const deserializeAws_json1_1DescribeServiceActionExecutionParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeTagOptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTagOptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTagOptionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTagOptionCommand = deserializeAws_json1_1DescribeTagOptionCommand;
const deserializeAws_json1_1DescribeTagOptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
            response = {
                ...(await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisableAWSOrganizationsAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableAWSOrganizationsAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableAWSOrganizationsAccessOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableAWSOrganizationsAccessCommand = deserializeAws_json1_1DisableAWSOrganizationsAccessCommand;
const deserializeAws_json1_1DisableAWSOrganizationsAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.servicecatalog#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.servicecatalog#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateBudgetFromResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateBudgetFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateBudgetFromResourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateBudgetFromResourceCommand = deserializeAws_json1_1DisassociateBudgetFromResourceCommand;
const deserializeAws_json1_1DisassociateBudgetFromResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociatePrincipalFromPortfolioOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommand = deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommand;
const deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateProductFromPortfolioCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateProductFromPortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateProductFromPortfolioOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateProductFromPortfolioCommand = deserializeAws_json1_1DisassociateProductFromPortfolioCommand;
const deserializeAws_json1_1DisassociateProductFromPortfolioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.servicecatalog#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand = deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand;
const deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateTagOptionFromResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateTagOptionFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateTagOptionFromResourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateTagOptionFromResourceCommand = deserializeAws_json1_1DisassociateTagOptionFromResourceCommand;
const deserializeAws_json1_1DisassociateTagOptionFromResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
            response = {
                ...(await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1EnableAWSOrganizationsAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableAWSOrganizationsAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableAWSOrganizationsAccessOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableAWSOrganizationsAccessCommand = deserializeAws_json1_1EnableAWSOrganizationsAccessCommand;
const deserializeAws_json1_1EnableAWSOrganizationsAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.servicecatalog#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.servicecatalog#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ExecuteProvisionedProductPlanCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ExecuteProvisionedProductPlanCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ExecuteProvisionedProductPlanOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ExecuteProvisionedProductPlanCommand = deserializeAws_json1_1ExecuteProvisionedProductPlanCommand;
const deserializeAws_json1_1ExecuteProvisionedProductPlanCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateException":
        case "com.amazonaws.servicecatalog#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ExecuteProvisionedProductServiceActionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand = deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand;
const deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateException":
        case "com.amazonaws.servicecatalog#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAWSOrganizationsAccessStatusOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommand = deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommand;
const deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotSupportedException":
        case "com.amazonaws.servicecatalog#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetProvisionedProductOutputsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetProvisionedProductOutputsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetProvisionedProductOutputsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetProvisionedProductOutputsCommand = deserializeAws_json1_1GetProvisionedProductOutputsCommand;
const deserializeAws_json1_1GetProvisionedProductOutputsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ImportAsProvisionedProductCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ImportAsProvisionedProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportAsProvisionedProductOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ImportAsProvisionedProductCommand = deserializeAws_json1_1ImportAsProvisionedProductCommand;
const deserializeAws_json1_1ImportAsProvisionedProductCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.servicecatalog#DuplicateResourceException":
            response = {
                ...(await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateException":
        case "com.amazonaws.servicecatalog#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListAcceptedPortfolioSharesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAcceptedPortfolioSharesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAcceptedPortfolioSharesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAcceptedPortfolioSharesCommand = deserializeAws_json1_1ListAcceptedPortfolioSharesCommand;
const deserializeAws_json1_1ListAcceptedPortfolioSharesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.servicecatalog#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListBudgetsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListBudgetsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBudgetsForResourceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListBudgetsForResourceCommand = deserializeAws_json1_1ListBudgetsForResourceCommand;
const deserializeAws_json1_1ListBudgetsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListConstraintsForPortfolioCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListConstraintsForPortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListConstraintsForPortfolioOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListConstraintsForPortfolioCommand = deserializeAws_json1_1ListConstraintsForPortfolioCommand;
const deserializeAws_json1_1ListConstraintsForPortfolioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListLaunchPathsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListLaunchPathsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLaunchPathsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLaunchPathsCommand = deserializeAws_json1_1ListLaunchPathsCommand;
const deserializeAws_json1_1ListLaunchPathsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListOrganizationPortfolioAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListOrganizationPortfolioAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOrganizationPortfolioAccessOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListOrganizationPortfolioAccessCommand = deserializeAws_json1_1ListOrganizationPortfolioAccessCommand;
const deserializeAws_json1_1ListOrganizationPortfolioAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.servicecatalog#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListPortfolioAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPortfolioAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPortfolioAccessOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPortfolioAccessCommand = deserializeAws_json1_1ListPortfolioAccessCommand;
const deserializeAws_json1_1ListPortfolioAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListPortfoliosCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPortfoliosCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPortfoliosOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPortfoliosCommand = deserializeAws_json1_1ListPortfoliosCommand;
const deserializeAws_json1_1ListPortfoliosCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListPortfoliosForProductCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPortfoliosForProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPortfoliosForProductOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPortfoliosForProductCommand = deserializeAws_json1_1ListPortfoliosForProductCommand;
const deserializeAws_json1_1ListPortfoliosForProductCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListPrincipalsForPortfolioCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPrincipalsForPortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPrincipalsForPortfolioOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPrincipalsForPortfolioCommand = deserializeAws_json1_1ListPrincipalsForPortfolioCommand;
const deserializeAws_json1_1ListPrincipalsForPortfolioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListProvisionedProductPlansCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListProvisionedProductPlansCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProvisionedProductPlansOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListProvisionedProductPlansCommand = deserializeAws_json1_1ListProvisionedProductPlansCommand;
const deserializeAws_json1_1ListProvisionedProductPlansCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListProvisioningArtifactsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListProvisioningArtifactsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProvisioningArtifactsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListProvisioningArtifactsCommand = deserializeAws_json1_1ListProvisioningArtifactsCommand;
const deserializeAws_json1_1ListProvisioningArtifactsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProvisioningArtifactsForServiceActionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand = deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand;
const deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListRecordHistoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRecordHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRecordHistoryOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRecordHistoryCommand = deserializeAws_json1_1ListRecordHistoryCommand;
const deserializeAws_json1_1ListRecordHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListResourcesForTagOptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResourcesForTagOptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourcesForTagOptionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResourcesForTagOptionCommand = deserializeAws_json1_1ListResourcesForTagOptionCommand;
const deserializeAws_json1_1ListResourcesForTagOptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
            response = {
                ...(await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListServiceActionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListServiceActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListServiceActionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListServiceActionsCommand = deserializeAws_json1_1ListServiceActionsCommand;
const deserializeAws_json1_1ListServiceActionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListServiceActionsForProvisioningArtifactOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand = deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand;
const deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListStackInstancesForProvisionedProductCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListStackInstancesForProvisionedProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListStackInstancesForProvisionedProductOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListStackInstancesForProvisionedProductCommand = deserializeAws_json1_1ListStackInstancesForProvisionedProductCommand;
const deserializeAws_json1_1ListStackInstancesForProvisionedProductCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTagOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagOptionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagOptionsCommand = deserializeAws_json1_1ListTagOptionsCommand;
const deserializeAws_json1_1ListTagOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
            response = {
                ...(await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ProvisionProductCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ProvisionProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ProvisionProductOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ProvisionProductCommand = deserializeAws_json1_1ProvisionProductCommand;
const deserializeAws_json1_1ProvisionProductCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.servicecatalog#DuplicateResourceException":
            response = {
                ...(await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RejectPortfolioShareCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RejectPortfolioShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RejectPortfolioShareOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RejectPortfolioShareCommand = deserializeAws_json1_1RejectPortfolioShareCommand;
const deserializeAws_json1_1RejectPortfolioShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ScanProvisionedProductsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ScanProvisionedProductsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ScanProvisionedProductsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ScanProvisionedProductsCommand = deserializeAws_json1_1ScanProvisionedProductsCommand;
const deserializeAws_json1_1ScanProvisionedProductsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchProductsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SearchProductsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchProductsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchProductsCommand = deserializeAws_json1_1SearchProductsCommand;
const deserializeAws_json1_1SearchProductsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchProductsAsAdminCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SearchProductsAsAdminCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchProductsAsAdminOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchProductsAsAdminCommand = deserializeAws_json1_1SearchProductsAsAdminCommand;
const deserializeAws_json1_1SearchProductsAsAdminCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SearchProvisionedProductsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SearchProvisionedProductsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchProvisionedProductsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchProvisionedProductsCommand = deserializeAws_json1_1SearchProvisionedProductsCommand;
const deserializeAws_json1_1SearchProvisionedProductsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1TerminateProvisionedProductCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TerminateProvisionedProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TerminateProvisionedProductOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TerminateProvisionedProductCommand = deserializeAws_json1_1TerminateProvisionedProductCommand;
const deserializeAws_json1_1TerminateProvisionedProductCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateConstraintCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateConstraintCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateConstraintOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateConstraintCommand = deserializeAws_json1_1UpdateConstraintCommand;
const deserializeAws_json1_1UpdateConstraintCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdatePortfolioCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdatePortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePortfolioOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdatePortfolioCommand = deserializeAws_json1_1UpdatePortfolioCommand;
const deserializeAws_json1_1UpdatePortfolioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.servicecatalog#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
            response = {
                ...(await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdatePortfolioShareCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdatePortfolioShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePortfolioShareOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdatePortfolioShareCommand = deserializeAws_json1_1UpdatePortfolioShareCommand;
const deserializeAws_json1_1UpdatePortfolioShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateException":
        case "com.amazonaws.servicecatalog#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.servicecatalog#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateProductCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateProductOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateProductCommand = deserializeAws_json1_1UpdateProductCommand;
const deserializeAws_json1_1UpdateProductCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
            response = {
                ...(await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateProvisionedProductCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateProvisionedProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateProvisionedProductOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateProvisionedProductCommand = deserializeAws_json1_1UpdateProvisionedProductCommand;
const deserializeAws_json1_1UpdateProvisionedProductCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateProvisionedProductPropertiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateProvisionedProductPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateProvisionedProductPropertiesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateProvisionedProductPropertiesCommand = deserializeAws_json1_1UpdateProvisionedProductPropertiesCommand;
const deserializeAws_json1_1UpdateProvisionedProductPropertiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateException":
        case "com.amazonaws.servicecatalog#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateProvisioningArtifactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateProvisioningArtifactOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateProvisioningArtifactCommand = deserializeAws_json1_1UpdateProvisioningArtifactCommand;
const deserializeAws_json1_1UpdateProvisioningArtifactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateServiceActionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateServiceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServiceActionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateServiceActionCommand = deserializeAws_json1_1UpdateServiceActionCommand;
const deserializeAws_json1_1UpdateServiceActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateTagOptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateTagOptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTagOptionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateTagOptionCommand = deserializeAws_json1_1UpdateTagOptionCommand;
const deserializeAws_json1_1UpdateTagOptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.servicecatalog#DuplicateResourceException":
            response = {
                ...(await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParametersException":
        case "com.amazonaws.servicecatalog#InvalidParametersException":
            response = {
                ...(await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
            response = {
                ...(await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DuplicateResourceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateResourceException(body, context);
    const contents = {
        name: "DuplicateResourceException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParametersExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParametersException(body, context);
    const contents = {
        name: "InvalidParametersException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidStateException(body, context);
    const contents = {
        name: "InvalidStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OperationNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationNotSupportedException(body, context);
    const contents = {
        name: "OperationNotSupportedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = {
        name: "ResourceInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TagOptionNotMigratedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagOptionNotMigratedException(body, context);
    const contents = {
        name: "TagOptionNotMigratedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AcceptPortfolioShareInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
        ...(input.PortfolioShareType !== undefined &&
            input.PortfolioShareType !== null && { PortfolioShareType: input.PortfolioShareType }),
    };
};
const serializeAws_json1_1AccessLevelFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1AddTags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1AssociateBudgetWithResourceInput = (input, context) => {
    return {
        ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1AssociatePrincipalWithPortfolioInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
        ...(input.PrincipalARN !== undefined && input.PrincipalARN !== null && { PrincipalARN: input.PrincipalARN }),
        ...(input.PrincipalType !== undefined && input.PrincipalType !== null && { PrincipalType: input.PrincipalType }),
    };
};
const serializeAws_json1_1AssociateProductWithPortfolioInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
        ...(input.SourcePortfolioId !== undefined &&
            input.SourcePortfolioId !== null && { SourcePortfolioId: input.SourcePortfolioId }),
    };
};
const serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
        ...(input.ProvisioningArtifactId !== undefined &&
            input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
        ...(input.ServiceActionId !== undefined &&
            input.ServiceActionId !== null && { ServiceActionId: input.ServiceActionId }),
    };
};
const serializeAws_json1_1AssociateTagOptionWithResourceInput = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.TagOptionId !== undefined && input.TagOptionId !== null && { TagOptionId: input.TagOptionId }),
    };
};
const serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.ServiceActionAssociations !== undefined &&
            input.ServiceActionAssociations !== null && {
            ServiceActionAssociations: serializeAws_json1_1ServiceActionAssociations(input.ServiceActionAssociations, context),
        }),
    };
};
const serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.ServiceActionAssociations !== undefined &&
            input.ServiceActionAssociations !== null && {
            ServiceActionAssociations: serializeAws_json1_1ServiceActionAssociations(input.ServiceActionAssociations, context),
        }),
    };
};
const serializeAws_json1_1CopyOptions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CopyProductInput = (input, context) => {
    var _a;
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.CopyOptions !== undefined &&
            input.CopyOptions !== null && { CopyOptions: serializeAws_json1_1CopyOptions(input.CopyOptions, context) }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.SourceProductArn !== undefined &&
            input.SourceProductArn !== null && { SourceProductArn: input.SourceProductArn }),
        ...(input.SourceProvisioningArtifactIdentifiers !== undefined &&
            input.SourceProvisioningArtifactIdentifiers !== null && {
            SourceProvisioningArtifactIdentifiers: serializeAws_json1_1SourceProvisioningArtifactProperties(input.SourceProvisioningArtifactIdentifiers, context),
        }),
        ...(input.TargetProductId !== undefined &&
            input.TargetProductId !== null && { TargetProductId: input.TargetProductId }),
        ...(input.TargetProductName !== undefined &&
            input.TargetProductName !== null && { TargetProductName: input.TargetProductName }),
    };
};
const serializeAws_json1_1CreateConstraintInput = (input, context) => {
    var _a;
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Parameters !== undefined && input.Parameters !== null && { Parameters: input.Parameters }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1CreatePortfolioInput = (input, context) => {
    var _a;
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.ProviderName !== undefined && input.ProviderName !== null && { ProviderName: input.ProviderName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1AddTags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreatePortfolioShareInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.OrganizationNode !== undefined &&
            input.OrganizationNode !== null && {
            OrganizationNode: serializeAws_json1_1OrganizationNode(input.OrganizationNode, context),
        }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
        ...(input.ShareTagOptions !== undefined &&
            input.ShareTagOptions !== null && { ShareTagOptions: input.ShareTagOptions }),
    };
};
const serializeAws_json1_1CreateProductInput = (input, context) => {
    var _a;
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Distributor !== undefined && input.Distributor !== null && { Distributor: input.Distributor }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Owner !== undefined && input.Owner !== null && { Owner: input.Owner }),
        ...(input.ProductType !== undefined && input.ProductType !== null && { ProductType: input.ProductType }),
        ...(input.ProvisioningArtifactParameters !== undefined &&
            input.ProvisioningArtifactParameters !== null && {
            ProvisioningArtifactParameters: serializeAws_json1_1ProvisioningArtifactProperties(input.ProvisioningArtifactParameters, context),
        }),
        ...(input.SupportDescription !== undefined &&
            input.SupportDescription !== null && { SupportDescription: input.SupportDescription }),
        ...(input.SupportEmail !== undefined && input.SupportEmail !== null && { SupportEmail: input.SupportEmail }),
        ...(input.SupportUrl !== undefined && input.SupportUrl !== null && { SupportUrl: input.SupportUrl }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1AddTags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateProvisionedProductPlanInput = (input, context) => {
    var _a;
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.NotificationArns !== undefined &&
            input.NotificationArns !== null && {
            NotificationArns: serializeAws_json1_1NotificationArns(input.NotificationArns, context),
        }),
        ...(input.PathId !== undefined && input.PathId !== null && { PathId: input.PathId }),
        ...(input.PlanName !== undefined && input.PlanName !== null && { PlanName: input.PlanName }),
        ...(input.PlanType !== undefined && input.PlanType !== null && { PlanType: input.PlanType }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
        ...(input.ProvisionedProductName !== undefined &&
            input.ProvisionedProductName !== null && { ProvisionedProductName: input.ProvisionedProductName }),
        ...(input.ProvisioningArtifactId !== undefined &&
            input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
        ...(input.ProvisioningParameters !== undefined &&
            input.ProvisioningParameters !== null && {
            ProvisioningParameters: serializeAws_json1_1UpdateProvisioningParameters(input.ProvisioningParameters, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateProvisioningArtifactInput = (input, context) => {
    var _a;
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && {
            Parameters: serializeAws_json1_1ProvisioningArtifactProperties(input.Parameters, context),
        }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
    };
};
const serializeAws_json1_1CreateServiceActionInput = (input, context) => {
    var _a;
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Definition !== undefined &&
            input.Definition !== null && {
            Definition: serializeAws_json1_1ServiceActionDefinitionMap(input.Definition, context),
        }),
        ...(input.DefinitionType !== undefined &&
            input.DefinitionType !== null && { DefinitionType: input.DefinitionType }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateTagOptionInput = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1DeleteConstraintInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DeletePortfolioInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DeletePortfolioShareInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.OrganizationNode !== undefined &&
            input.OrganizationNode !== null && {
            OrganizationNode: serializeAws_json1_1OrganizationNode(input.OrganizationNode, context),
        }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
    };
};
const serializeAws_json1_1DeleteProductInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DeleteProvisionedProductPlanInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.IgnoreErrors !== undefined && input.IgnoreErrors !== null && { IgnoreErrors: input.IgnoreErrors }),
        ...(input.PlanId !== undefined && input.PlanId !== null && { PlanId: input.PlanId }),
    };
};
const serializeAws_json1_1DeleteProvisioningArtifactInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
        ...(input.ProvisioningArtifactId !== undefined &&
            input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
    };
};
const serializeAws_json1_1DeleteServiceActionInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DeleteTagOptionInput = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DescribeConstraintInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DescribeCopyProductStatusInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.CopyProductToken !== undefined &&
            input.CopyProductToken !== null && { CopyProductToken: input.CopyProductToken }),
    };
};
const serializeAws_json1_1DescribePortfolioInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DescribePortfolioSharesInput = (input, context) => {
    return {
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1DescribePortfolioShareStatusInput = (input, context) => {
    return {
        ...(input.PortfolioShareToken !== undefined &&
            input.PortfolioShareToken !== null && { PortfolioShareToken: input.PortfolioShareToken }),
    };
};
const serializeAws_json1_1DescribeProductAsAdminInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.SourcePortfolioId !== undefined &&
            input.SourcePortfolioId !== null && { SourcePortfolioId: input.SourcePortfolioId }),
    };
};
const serializeAws_json1_1DescribeProductInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DescribeProductViewInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DescribeProvisionedProductInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DescribeProvisionedProductPlanInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.PlanId !== undefined && input.PlanId !== null && { PlanId: input.PlanId }),
    };
};
const serializeAws_json1_1DescribeProvisioningArtifactInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
        ...(input.ProductName !== undefined && input.ProductName !== null && { ProductName: input.ProductName }),
        ...(input.ProvisioningArtifactId !== undefined &&
            input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
        ...(input.ProvisioningArtifactName !== undefined &&
            input.ProvisioningArtifactName !== null && { ProvisioningArtifactName: input.ProvisioningArtifactName }),
        ...(input.Verbose !== undefined && input.Verbose !== null && { Verbose: input.Verbose }),
    };
};
const serializeAws_json1_1DescribeProvisioningParametersInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PathId !== undefined && input.PathId !== null && { PathId: input.PathId }),
        ...(input.PathName !== undefined && input.PathName !== null && { PathName: input.PathName }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
        ...(input.ProductName !== undefined && input.ProductName !== null && { ProductName: input.ProductName }),
        ...(input.ProvisioningArtifactId !== undefined &&
            input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
        ...(input.ProvisioningArtifactName !== undefined &&
            input.ProvisioningArtifactName !== null && { ProvisioningArtifactName: input.ProvisioningArtifactName }),
    };
};
const serializeAws_json1_1DescribeRecordInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
    };
};
const serializeAws_json1_1DescribeServiceActionExecutionParametersInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.ProvisionedProductId !== undefined &&
            input.ProvisionedProductId !== null && { ProvisionedProductId: input.ProvisionedProductId }),
        ...(input.ServiceActionId !== undefined &&
            input.ServiceActionId !== null && { ServiceActionId: input.ServiceActionId }),
    };
};
const serializeAws_json1_1DescribeServiceActionInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DescribeTagOptionInput = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DisableAWSOrganizationsAccessInput = (input, context) => {
    return {};
};
const serializeAws_json1_1DisassociateBudgetFromResourceInput = (input, context) => {
    return {
        ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1DisassociatePrincipalFromPortfolioInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
        ...(input.PrincipalARN !== undefined && input.PrincipalARN !== null && { PrincipalARN: input.PrincipalARN }),
    };
};
const serializeAws_json1_1DisassociateProductFromPortfolioInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
    };
};
const serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
        ...(input.ProvisioningArtifactId !== undefined &&
            input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
        ...(input.ServiceActionId !== undefined &&
            input.ServiceActionId !== null && { ServiceActionId: input.ServiceActionId }),
    };
};
const serializeAws_json1_1DisassociateTagOptionFromResourceInput = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.TagOptionId !== undefined && input.TagOptionId !== null && { TagOptionId: input.TagOptionId }),
    };
};
const serializeAws_json1_1EnableAWSOrganizationsAccessInput = (input, context) => {
    return {};
};
const serializeAws_json1_1ExecuteProvisionedProductPlanInput = (input, context) => {
    var _a;
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.PlanId !== undefined && input.PlanId !== null && { PlanId: input.PlanId }),
    };
};
const serializeAws_json1_1ExecuteProvisionedProductServiceActionInput = (input, context) => {
    var _a;
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ExecuteToken: (_a = input.ExecuteToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && {
            Parameters: serializeAws_json1_1ExecutionParameterMap(input.Parameters, context),
        }),
        ...(input.ProvisionedProductId !== undefined &&
            input.ProvisionedProductId !== null && { ProvisionedProductId: input.ProvisionedProductId }),
        ...(input.ServiceActionId !== undefined &&
            input.ServiceActionId !== null && { ServiceActionId: input.ServiceActionId }),
    };
};
const serializeAws_json1_1ExecutionParameterMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1ExecutionParameterValueList(value, context),
        };
    }, {});
};
const serializeAws_json1_1ExecutionParameterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GetAWSOrganizationsAccessStatusInput = (input, context) => {
    return {};
};
const serializeAws_json1_1GetProvisionedProductOutputsInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.OutputKeys !== undefined &&
            input.OutputKeys !== null && { OutputKeys: serializeAws_json1_1OutputKeys(input.OutputKeys, context) }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.ProvisionedProductId !== undefined &&
            input.ProvisionedProductId !== null && { ProvisionedProductId: input.ProvisionedProductId }),
        ...(input.ProvisionedProductName !== undefined &&
            input.ProvisionedProductName !== null && { ProvisionedProductName: input.ProvisionedProductName }),
    };
};
const serializeAws_json1_1ImportAsProvisionedProductInput = (input, context) => {
    var _a;
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.PhysicalId !== undefined && input.PhysicalId !== null && { PhysicalId: input.PhysicalId }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
        ...(input.ProvisionedProductName !== undefined &&
            input.ProvisionedProductName !== null && { ProvisionedProductName: input.ProvisionedProductName }),
        ...(input.ProvisioningArtifactId !== undefined &&
            input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
    };
};
const serializeAws_json1_1ListAcceptedPortfolioSharesInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.PortfolioShareType !== undefined &&
            input.PortfolioShareType !== null && { PortfolioShareType: input.PortfolioShareType }),
    };
};
const serializeAws_json1_1ListBudgetsForResourceInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1ListConstraintsForPortfolioInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
    };
};
const serializeAws_json1_1ListLaunchPathsInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
    };
};
const serializeAws_json1_1ListOrganizationPortfolioAccessInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.OrganizationNodeType !== undefined &&
            input.OrganizationNodeType !== null && { OrganizationNodeType: input.OrganizationNodeType }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
    };
};
const serializeAws_json1_1ListPortfolioAccessInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.OrganizationParentId !== undefined &&
            input.OrganizationParentId !== null && { OrganizationParentId: input.OrganizationParentId }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
    };
};
const serializeAws_json1_1ListPortfoliosForProductInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
    };
};
const serializeAws_json1_1ListPortfoliosInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
    };
};
const serializeAws_json1_1ListPrincipalsForPortfolioInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
    };
};
const serializeAws_json1_1ListProvisionedProductPlansInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.AccessLevelFilter !== undefined &&
            input.AccessLevelFilter !== null && {
            AccessLevelFilter: serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context),
        }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.ProvisionProductId !== undefined &&
            input.ProvisionProductId !== null && { ProvisionProductId: input.ProvisionProductId }),
    };
};
const serializeAws_json1_1ListProvisioningArtifactsForServiceActionInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.ServiceActionId !== undefined &&
            input.ServiceActionId !== null && { ServiceActionId: input.ServiceActionId }),
    };
};
const serializeAws_json1_1ListProvisioningArtifactsInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
    };
};
const serializeAws_json1_1ListRecordHistoryInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.AccessLevelFilter !== undefined &&
            input.AccessLevelFilter !== null && {
            AccessLevelFilter: serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context),
        }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.SearchFilter !== undefined &&
            input.SearchFilter !== null && {
            SearchFilter: serializeAws_json1_1ListRecordHistorySearchFilter(input.SearchFilter, context),
        }),
    };
};
const serializeAws_json1_1ListRecordHistorySearchFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1ListResourcesForTagOptionInput = (input, context) => {
    return {
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.TagOptionId !== undefined && input.TagOptionId !== null && { TagOptionId: input.TagOptionId }),
    };
};
const serializeAws_json1_1ListServiceActionsForProvisioningArtifactInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
        ...(input.ProvisioningArtifactId !== undefined &&
            input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
    };
};
const serializeAws_json1_1ListServiceActionsInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
    };
};
const serializeAws_json1_1ListStackInstancesForProvisionedProductInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.ProvisionedProductId !== undefined &&
            input.ProvisionedProductId !== null && { ProvisionedProductId: input.ProvisionedProductId }),
    };
};
const serializeAws_json1_1ListTagOptionsFilters = (input, context) => {
    return {
        ...(input.Active !== undefined && input.Active !== null && { Active: input.Active }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1ListTagOptionsInput = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1ListTagOptionsFilters(input.Filters, context) }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
    };
};
const serializeAws_json1_1NotificationArns = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1OrganizationNode = (input, context) => {
    return {
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1OutputKeys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ProductViewFilters = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1ProductViewFilterValues(value, context),
        };
    }, {});
};
const serializeAws_json1_1ProductViewFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ProvisionedProductFilters = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1ProvisionedProductViewFilterValues(value, context),
        };
    }, {});
};
const serializeAws_json1_1ProvisionedProductProperties = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1ProvisionedProductViewFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ProvisioningArtifactInfo = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1ProvisioningArtifactProperties = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DisableTemplateValidation !== undefined &&
            input.DisableTemplateValidation !== null && { DisableTemplateValidation: input.DisableTemplateValidation }),
        ...(input.Info !== undefined &&
            input.Info !== null && { Info: serializeAws_json1_1ProvisioningArtifactInfo(input.Info, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1ProvisioningParameter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1ProvisioningParameters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ProvisioningParameter(entry, context);
    });
};
const serializeAws_json1_1ProvisioningPreferences = (input, context) => {
    return {
        ...(input.StackSetAccounts !== undefined &&
            input.StackSetAccounts !== null && {
            StackSetAccounts: serializeAws_json1_1StackSetAccounts(input.StackSetAccounts, context),
        }),
        ...(input.StackSetFailureToleranceCount !== undefined &&
            input.StackSetFailureToleranceCount !== null && {
            StackSetFailureToleranceCount: input.StackSetFailureToleranceCount,
        }),
        ...(input.StackSetFailureTolerancePercentage !== undefined &&
            input.StackSetFailureTolerancePercentage !== null && {
            StackSetFailureTolerancePercentage: input.StackSetFailureTolerancePercentage,
        }),
        ...(input.StackSetMaxConcurrencyCount !== undefined &&
            input.StackSetMaxConcurrencyCount !== null && { StackSetMaxConcurrencyCount: input.StackSetMaxConcurrencyCount }),
        ...(input.StackSetMaxConcurrencyPercentage !== undefined &&
            input.StackSetMaxConcurrencyPercentage !== null && {
            StackSetMaxConcurrencyPercentage: input.StackSetMaxConcurrencyPercentage,
        }),
        ...(input.StackSetRegions !== undefined &&
            input.StackSetRegions !== null && {
            StackSetRegions: serializeAws_json1_1StackSetRegions(input.StackSetRegions, context),
        }),
    };
};
const serializeAws_json1_1ProvisionProductInput = (input, context) => {
    var _a;
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.NotificationArns !== undefined &&
            input.NotificationArns !== null && {
            NotificationArns: serializeAws_json1_1NotificationArns(input.NotificationArns, context),
        }),
        ...(input.PathId !== undefined && input.PathId !== null && { PathId: input.PathId }),
        ...(input.PathName !== undefined && input.PathName !== null && { PathName: input.PathName }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
        ...(input.ProductName !== undefined && input.ProductName !== null && { ProductName: input.ProductName }),
        ProvisionToken: (_a = input.ProvisionToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.ProvisionedProductName !== undefined &&
            input.ProvisionedProductName !== null && { ProvisionedProductName: input.ProvisionedProductName }),
        ...(input.ProvisioningArtifactId !== undefined &&
            input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
        ...(input.ProvisioningArtifactName !== undefined &&
            input.ProvisioningArtifactName !== null && { ProvisioningArtifactName: input.ProvisioningArtifactName }),
        ...(input.ProvisioningParameters !== undefined &&
            input.ProvisioningParameters !== null && {
            ProvisioningParameters: serializeAws_json1_1ProvisioningParameters(input.ProvisioningParameters, context),
        }),
        ...(input.ProvisioningPreferences !== undefined &&
            input.ProvisioningPreferences !== null && {
            ProvisioningPreferences: serializeAws_json1_1ProvisioningPreferences(input.ProvisioningPreferences, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1RejectPortfolioShareInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
        ...(input.PortfolioShareType !== undefined &&
            input.PortfolioShareType !== null && { PortfolioShareType: input.PortfolioShareType }),
    };
};
const serializeAws_json1_1ScanProvisionedProductsInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.AccessLevelFilter !== undefined &&
            input.AccessLevelFilter !== null && {
            AccessLevelFilter: serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context),
        }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
    };
};
const serializeAws_json1_1SearchProductsAsAdminInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1ProductViewFilters(input.Filters, context) }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
        ...(input.ProductSource !== undefined && input.ProductSource !== null && { ProductSource: input.ProductSource }),
        ...(input.SortBy !== undefined && input.SortBy !== null && { SortBy: input.SortBy }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
    };
};
const serializeAws_json1_1SearchProductsInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1ProductViewFilters(input.Filters, context) }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.SortBy !== undefined && input.SortBy !== null && { SortBy: input.SortBy }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
    };
};
const serializeAws_json1_1SearchProvisionedProductsInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.AccessLevelFilter !== undefined &&
            input.AccessLevelFilter !== null && {
            AccessLevelFilter: serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context),
        }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1ProvisionedProductFilters(input.Filters, context) }),
        ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
        ...(input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }),
        ...(input.SortBy !== undefined && input.SortBy !== null && { SortBy: input.SortBy }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
    };
};
const serializeAws_json1_1ServiceActionAssociation = (input, context) => {
    return {
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
        ...(input.ProvisioningArtifactId !== undefined &&
            input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
        ...(input.ServiceActionId !== undefined &&
            input.ServiceActionId !== null && { ServiceActionId: input.ServiceActionId }),
    };
};
const serializeAws_json1_1ServiceActionAssociations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServiceActionAssociation(entry, context);
    });
};
const serializeAws_json1_1ServiceActionDefinitionMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1SourceProvisioningArtifactProperties = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SourceProvisioningArtifactPropertiesMap(entry, context);
    });
};
const serializeAws_json1_1SourceProvisioningArtifactPropertiesMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1StackSetAccounts = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StackSetRegions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagKeys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TerminateProvisionedProductInput = (input, context) => {
    var _a;
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.IgnoreErrors !== undefined && input.IgnoreErrors !== null && { IgnoreErrors: input.IgnoreErrors }),
        ...(input.ProvisionedProductId !== undefined &&
            input.ProvisionedProductId !== null && { ProvisionedProductId: input.ProvisionedProductId }),
        ...(input.ProvisionedProductName !== undefined &&
            input.ProvisionedProductName !== null && { ProvisionedProductName: input.ProvisionedProductName }),
        ...(input.RetainPhysicalResources !== undefined &&
            input.RetainPhysicalResources !== null && { RetainPhysicalResources: input.RetainPhysicalResources }),
        TerminateToken: (_a = input.TerminateToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    };
};
const serializeAws_json1_1UpdateConstraintInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Parameters !== undefined && input.Parameters !== null && { Parameters: input.Parameters }),
    };
};
const serializeAws_json1_1UpdatePortfolioInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.AddTags !== undefined &&
            input.AddTags !== null && { AddTags: serializeAws_json1_1AddTags(input.AddTags, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.ProviderName !== undefined && input.ProviderName !== null && { ProviderName: input.ProviderName }),
        ...(input.RemoveTags !== undefined &&
            input.RemoveTags !== null && { RemoveTags: serializeAws_json1_1TagKeys(input.RemoveTags, context) }),
    };
};
const serializeAws_json1_1UpdatePortfolioShareInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.OrganizationNode !== undefined &&
            input.OrganizationNode !== null && {
            OrganizationNode: serializeAws_json1_1OrganizationNode(input.OrganizationNode, context),
        }),
        ...(input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }),
        ...(input.ShareTagOptions !== undefined &&
            input.ShareTagOptions !== null && { ShareTagOptions: input.ShareTagOptions }),
    };
};
const serializeAws_json1_1UpdateProductInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.AddTags !== undefined &&
            input.AddTags !== null && { AddTags: serializeAws_json1_1AddTags(input.AddTags, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Distributor !== undefined && input.Distributor !== null && { Distributor: input.Distributor }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Owner !== undefined && input.Owner !== null && { Owner: input.Owner }),
        ...(input.RemoveTags !== undefined &&
            input.RemoveTags !== null && { RemoveTags: serializeAws_json1_1TagKeys(input.RemoveTags, context) }),
        ...(input.SupportDescription !== undefined &&
            input.SupportDescription !== null && { SupportDescription: input.SupportDescription }),
        ...(input.SupportEmail !== undefined && input.SupportEmail !== null && { SupportEmail: input.SupportEmail }),
        ...(input.SupportUrl !== undefined && input.SupportUrl !== null && { SupportUrl: input.SupportUrl }),
    };
};
const serializeAws_json1_1UpdateProvisionedProductInput = (input, context) => {
    var _a;
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.PathId !== undefined && input.PathId !== null && { PathId: input.PathId }),
        ...(input.PathName !== undefined && input.PathName !== null && { PathName: input.PathName }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
        ...(input.ProductName !== undefined && input.ProductName !== null && { ProductName: input.ProductName }),
        ...(input.ProvisionedProductId !== undefined &&
            input.ProvisionedProductId !== null && { ProvisionedProductId: input.ProvisionedProductId }),
        ...(input.ProvisionedProductName !== undefined &&
            input.ProvisionedProductName !== null && { ProvisionedProductName: input.ProvisionedProductName }),
        ...(input.ProvisioningArtifactId !== undefined &&
            input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
        ...(input.ProvisioningArtifactName !== undefined &&
            input.ProvisioningArtifactName !== null && { ProvisioningArtifactName: input.ProvisioningArtifactName }),
        ...(input.ProvisioningParameters !== undefined &&
            input.ProvisioningParameters !== null && {
            ProvisioningParameters: serializeAws_json1_1UpdateProvisioningParameters(input.ProvisioningParameters, context),
        }),
        ...(input.ProvisioningPreferences !== undefined &&
            input.ProvisioningPreferences !== null && {
            ProvisioningPreferences: serializeAws_json1_1UpdateProvisioningPreferences(input.ProvisioningPreferences, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        UpdateToken: (_a = input.UpdateToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    };
};
const serializeAws_json1_1UpdateProvisionedProductPropertiesInput = (input, context) => {
    var _a;
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.ProvisionedProductId !== undefined &&
            input.ProvisionedProductId !== null && { ProvisionedProductId: input.ProvisionedProductId }),
        ...(input.ProvisionedProductProperties !== undefined &&
            input.ProvisionedProductProperties !== null && {
            ProvisionedProductProperties: serializeAws_json1_1ProvisionedProductProperties(input.ProvisionedProductProperties, context),
        }),
    };
};
const serializeAws_json1_1UpdateProvisioningArtifactInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Active !== undefined && input.Active !== null && { Active: input.Active }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Guidance !== undefined && input.Guidance !== null && { Guidance: input.Guidance }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
        ...(input.ProvisioningArtifactId !== undefined &&
            input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
    };
};
const serializeAws_json1_1UpdateProvisioningParameter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.UsePreviousValue !== undefined &&
            input.UsePreviousValue !== null && { UsePreviousValue: input.UsePreviousValue }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1UpdateProvisioningParameters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1UpdateProvisioningParameter(entry, context);
    });
};
const serializeAws_json1_1UpdateProvisioningPreferences = (input, context) => {
    return {
        ...(input.StackSetAccounts !== undefined &&
            input.StackSetAccounts !== null && {
            StackSetAccounts: serializeAws_json1_1StackSetAccounts(input.StackSetAccounts, context),
        }),
        ...(input.StackSetFailureToleranceCount !== undefined &&
            input.StackSetFailureToleranceCount !== null && {
            StackSetFailureToleranceCount: input.StackSetFailureToleranceCount,
        }),
        ...(input.StackSetFailureTolerancePercentage !== undefined &&
            input.StackSetFailureTolerancePercentage !== null && {
            StackSetFailureTolerancePercentage: input.StackSetFailureTolerancePercentage,
        }),
        ...(input.StackSetMaxConcurrencyCount !== undefined &&
            input.StackSetMaxConcurrencyCount !== null && { StackSetMaxConcurrencyCount: input.StackSetMaxConcurrencyCount }),
        ...(input.StackSetMaxConcurrencyPercentage !== undefined &&
            input.StackSetMaxConcurrencyPercentage !== null && {
            StackSetMaxConcurrencyPercentage: input.StackSetMaxConcurrencyPercentage,
        }),
        ...(input.StackSetOperationType !== undefined &&
            input.StackSetOperationType !== null && { StackSetOperationType: input.StackSetOperationType }),
        ...(input.StackSetRegions !== undefined &&
            input.StackSetRegions !== null && {
            StackSetRegions: serializeAws_json1_1StackSetRegions(input.StackSetRegions, context),
        }),
    };
};
const serializeAws_json1_1UpdateServiceActionInput = (input, context) => {
    return {
        ...(input.AcceptLanguage !== undefined &&
            input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage }),
        ...(input.Definition !== undefined &&
            input.Definition !== null && {
            Definition: serializeAws_json1_1ServiceActionDefinitionMap(input.Definition, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1UpdateTagOptionInput = (input, context) => {
    return {
        ...(input.Active !== undefined && input.Active !== null && { Active: input.Active }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const deserializeAws_json1_1AcceptPortfolioShareOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1AccountIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AllowedValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AssociateBudgetWithResourceOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1AssociatePrincipalWithPortfolioOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1AssociateProductWithPortfolioOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1AssociateTagOptionWithResourceOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactOutput = (output, context) => {
    return {
        FailedServiceActionAssociations: output.FailedServiceActionAssociations !== undefined && output.FailedServiceActionAssociations !== null
            ? deserializeAws_json1_1FailedServiceActionAssociations(output.FailedServiceActionAssociations, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactOutput = (output, context) => {
    return {
        FailedServiceActionAssociations: output.FailedServiceActionAssociations !== undefined && output.FailedServiceActionAssociations !== null
            ? deserializeAws_json1_1FailedServiceActionAssociations(output.FailedServiceActionAssociations, context)
            : undefined,
    };
};
const deserializeAws_json1_1BudgetDetail = (output, context) => {
    return {
        BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
    };
};
const deserializeAws_json1_1Budgets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BudgetDetail(entry, context);
    });
};
const deserializeAws_json1_1CloudWatchDashboard = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1CloudWatchDashboards = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CloudWatchDashboard(entry, context);
    });
};
const deserializeAws_json1_1ConstraintDetail = (output, context) => {
    return {
        ConstraintId: output.ConstraintId !== undefined && output.ConstraintId !== null ? output.ConstraintId : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        PortfolioId: output.PortfolioId !== undefined && output.PortfolioId !== null ? output.PortfolioId : undefined,
        ProductId: output.ProductId !== undefined && output.ProductId !== null ? output.ProductId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ConstraintDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConstraintDetail(entry, context);
    });
};
const deserializeAws_json1_1ConstraintSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConstraintSummary(entry, context);
    });
};
const deserializeAws_json1_1ConstraintSummary = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1CopyProductOutput = (output, context) => {
    return {
        CopyProductToken: output.CopyProductToken !== undefined && output.CopyProductToken !== null ? output.CopyProductToken : undefined,
    };
};
const deserializeAws_json1_1CreateConstraintOutput = (output, context) => {
    return {
        ConstraintDetail: output.ConstraintDetail !== undefined && output.ConstraintDetail !== null
            ? deserializeAws_json1_1ConstraintDetail(output.ConstraintDetail, context)
            : undefined,
        ConstraintParameters: output.ConstraintParameters !== undefined && output.ConstraintParameters !== null
            ? output.ConstraintParameters
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1CreatePortfolioOutput = (output, context) => {
    return {
        PortfolioDetail: output.PortfolioDetail !== undefined && output.PortfolioDetail !== null
            ? deserializeAws_json1_1PortfolioDetail(output.PortfolioDetail, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1CreatePortfolioShareOutput = (output, context) => {
    return {
        PortfolioShareToken: output.PortfolioShareToken !== undefined && output.PortfolioShareToken !== null
            ? output.PortfolioShareToken
            : undefined,
    };
};
const deserializeAws_json1_1CreateProductOutput = (output, context) => {
    return {
        ProductViewDetail: output.ProductViewDetail !== undefined && output.ProductViewDetail !== null
            ? deserializeAws_json1_1ProductViewDetail(output.ProductViewDetail, context)
            : undefined,
        ProvisioningArtifactDetail: output.ProvisioningArtifactDetail !== undefined && output.ProvisioningArtifactDetail !== null
            ? deserializeAws_json1_1ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1CreateProvisionedProductPlanOutput = (output, context) => {
    return {
        PlanId: output.PlanId !== undefined && output.PlanId !== null ? output.PlanId : undefined,
        PlanName: output.PlanName !== undefined && output.PlanName !== null ? output.PlanName : undefined,
        ProvisionProductId: output.ProvisionProductId !== undefined && output.ProvisionProductId !== null
            ? output.ProvisionProductId
            : undefined,
        ProvisionedProductName: output.ProvisionedProductName !== undefined && output.ProvisionedProductName !== null
            ? output.ProvisionedProductName
            : undefined,
        ProvisioningArtifactId: output.ProvisioningArtifactId !== undefined && output.ProvisioningArtifactId !== null
            ? output.ProvisioningArtifactId
            : undefined,
    };
};
const deserializeAws_json1_1CreateProvisioningArtifactOutput = (output, context) => {
    return {
        Info: output.Info !== undefined && output.Info !== null
            ? deserializeAws_json1_1ProvisioningArtifactInfo(output.Info, context)
            : undefined,
        ProvisioningArtifactDetail: output.ProvisioningArtifactDetail !== undefined && output.ProvisioningArtifactDetail !== null
            ? deserializeAws_json1_1ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1CreateServiceActionOutput = (output, context) => {
    return {
        ServiceActionDetail: output.ServiceActionDetail !== undefined && output.ServiceActionDetail !== null
            ? deserializeAws_json1_1ServiceActionDetail(output.ServiceActionDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateTagOptionOutput = (output, context) => {
    return {
        TagOptionDetail: output.TagOptionDetail !== undefined && output.TagOptionDetail !== null
            ? deserializeAws_json1_1TagOptionDetail(output.TagOptionDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteConstraintOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeletePortfolioOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeletePortfolioShareOutput = (output, context) => {
    return {
        PortfolioShareToken: output.PortfolioShareToken !== undefined && output.PortfolioShareToken !== null
            ? output.PortfolioShareToken
            : undefined,
    };
};
const deserializeAws_json1_1DeleteProductOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteProvisionedProductPlanOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteProvisioningArtifactOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteServiceActionOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteTagOptionOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeConstraintOutput = (output, context) => {
    return {
        ConstraintDetail: output.ConstraintDetail !== undefined && output.ConstraintDetail !== null
            ? deserializeAws_json1_1ConstraintDetail(output.ConstraintDetail, context)
            : undefined,
        ConstraintParameters: output.ConstraintParameters !== undefined && output.ConstraintParameters !== null
            ? output.ConstraintParameters
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DescribeCopyProductStatusOutput = (output, context) => {
    return {
        CopyProductStatus: output.CopyProductStatus !== undefined && output.CopyProductStatus !== null
            ? output.CopyProductStatus
            : undefined,
        StatusDetail: output.StatusDetail !== undefined && output.StatusDetail !== null ? output.StatusDetail : undefined,
        TargetProductId: output.TargetProductId !== undefined && output.TargetProductId !== null ? output.TargetProductId : undefined,
    };
};
const deserializeAws_json1_1DescribePortfolioOutput = (output, context) => {
    return {
        Budgets: output.Budgets !== undefined && output.Budgets !== null
            ? deserializeAws_json1_1Budgets(output.Budgets, context)
            : undefined,
        PortfolioDetail: output.PortfolioDetail !== undefined && output.PortfolioDetail !== null
            ? deserializeAws_json1_1PortfolioDetail(output.PortfolioDetail, context)
            : undefined,
        TagOptions: output.TagOptions !== undefined && output.TagOptions !== null
            ? deserializeAws_json1_1TagOptionDetails(output.TagOptions, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1DescribePortfolioSharesOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        PortfolioShareDetails: output.PortfolioShareDetails !== undefined && output.PortfolioShareDetails !== null
            ? deserializeAws_json1_1PortfolioShareDetails(output.PortfolioShareDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribePortfolioShareStatusOutput = (output, context) => {
    return {
        OrganizationNodeValue: output.OrganizationNodeValue !== undefined && output.OrganizationNodeValue !== null
            ? output.OrganizationNodeValue
            : undefined,
        PortfolioId: output.PortfolioId !== undefined && output.PortfolioId !== null ? output.PortfolioId : undefined,
        PortfolioShareToken: output.PortfolioShareToken !== undefined && output.PortfolioShareToken !== null
            ? output.PortfolioShareToken
            : undefined,
        ShareDetails: output.ShareDetails !== undefined && output.ShareDetails !== null
            ? deserializeAws_json1_1ShareDetails(output.ShareDetails, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DescribeProductAsAdminOutput = (output, context) => {
    return {
        Budgets: output.Budgets !== undefined && output.Budgets !== null
            ? deserializeAws_json1_1Budgets(output.Budgets, context)
            : undefined,
        ProductViewDetail: output.ProductViewDetail !== undefined && output.ProductViewDetail !== null
            ? deserializeAws_json1_1ProductViewDetail(output.ProductViewDetail, context)
            : undefined,
        ProvisioningArtifactSummaries: output.ProvisioningArtifactSummaries !== undefined && output.ProvisioningArtifactSummaries !== null
            ? deserializeAws_json1_1ProvisioningArtifactSummaries(output.ProvisioningArtifactSummaries, context)
            : undefined,
        TagOptions: output.TagOptions !== undefined && output.TagOptions !== null
            ? deserializeAws_json1_1TagOptionDetails(output.TagOptions, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1DescribeProductOutput = (output, context) => {
    return {
        Budgets: output.Budgets !== undefined && output.Budgets !== null
            ? deserializeAws_json1_1Budgets(output.Budgets, context)
            : undefined,
        LaunchPaths: output.LaunchPaths !== undefined && output.LaunchPaths !== null
            ? deserializeAws_json1_1LaunchPaths(output.LaunchPaths, context)
            : undefined,
        ProductViewSummary: output.ProductViewSummary !== undefined && output.ProductViewSummary !== null
            ? deserializeAws_json1_1ProductViewSummary(output.ProductViewSummary, context)
            : undefined,
        ProvisioningArtifacts: output.ProvisioningArtifacts !== undefined && output.ProvisioningArtifacts !== null
            ? deserializeAws_json1_1ProvisioningArtifacts(output.ProvisioningArtifacts, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeProductViewOutput = (output, context) => {
    return {
        ProductViewSummary: output.ProductViewSummary !== undefined && output.ProductViewSummary !== null
            ? deserializeAws_json1_1ProductViewSummary(output.ProductViewSummary, context)
            : undefined,
        ProvisioningArtifacts: output.ProvisioningArtifacts !== undefined && output.ProvisioningArtifacts !== null
            ? deserializeAws_json1_1ProvisioningArtifacts(output.ProvisioningArtifacts, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeProvisionedProductOutput = (output, context) => {
    return {
        CloudWatchDashboards: output.CloudWatchDashboards !== undefined && output.CloudWatchDashboards !== null
            ? deserializeAws_json1_1CloudWatchDashboards(output.CloudWatchDashboards, context)
            : undefined,
        ProvisionedProductDetail: output.ProvisionedProductDetail !== undefined && output.ProvisionedProductDetail !== null
            ? deserializeAws_json1_1ProvisionedProductDetail(output.ProvisionedProductDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeProvisionedProductPlanOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ProvisionedProductPlanDetails: output.ProvisionedProductPlanDetails !== undefined && output.ProvisionedProductPlanDetails !== null
            ? deserializeAws_json1_1ProvisionedProductPlanDetails(output.ProvisionedProductPlanDetails, context)
            : undefined,
        ResourceChanges: output.ResourceChanges !== undefined && output.ResourceChanges !== null
            ? deserializeAws_json1_1ResourceChanges(output.ResourceChanges, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeProvisioningArtifactOutput = (output, context) => {
    return {
        Info: output.Info !== undefined && output.Info !== null
            ? deserializeAws_json1_1ProvisioningArtifactInfo(output.Info, context)
            : undefined,
        ProvisioningArtifactDetail: output.ProvisioningArtifactDetail !== undefined && output.ProvisioningArtifactDetail !== null
            ? deserializeAws_json1_1ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DescribeProvisioningParametersOutput = (output, context) => {
    return {
        ConstraintSummaries: output.ConstraintSummaries !== undefined && output.ConstraintSummaries !== null
            ? deserializeAws_json1_1ConstraintSummaries(output.ConstraintSummaries, context)
            : undefined,
        ProvisioningArtifactOutputs: output.ProvisioningArtifactOutputs !== undefined && output.ProvisioningArtifactOutputs !== null
            ? deserializeAws_json1_1ProvisioningArtifactOutputs(output.ProvisioningArtifactOutputs, context)
            : undefined,
        ProvisioningArtifactParameters: output.ProvisioningArtifactParameters !== undefined && output.ProvisioningArtifactParameters !== null
            ? deserializeAws_json1_1ProvisioningArtifactParameters(output.ProvisioningArtifactParameters, context)
            : undefined,
        ProvisioningArtifactPreferences: output.ProvisioningArtifactPreferences !== undefined && output.ProvisioningArtifactPreferences !== null
            ? deserializeAws_json1_1ProvisioningArtifactPreferences(output.ProvisioningArtifactPreferences, context)
            : undefined,
        TagOptions: output.TagOptions !== undefined && output.TagOptions !== null
            ? deserializeAws_json1_1TagOptionSummaries(output.TagOptions, context)
            : undefined,
        UsageInstructions: output.UsageInstructions !== undefined && output.UsageInstructions !== null
            ? deserializeAws_json1_1UsageInstructions(output.UsageInstructions, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeRecordOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        RecordDetail: output.RecordDetail !== undefined && output.RecordDetail !== null
            ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context)
            : undefined,
        RecordOutputs: output.RecordOutputs !== undefined && output.RecordOutputs !== null
            ? deserializeAws_json1_1RecordOutputs(output.RecordOutputs, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeServiceActionExecutionParametersOutput = (output, context) => {
    return {
        ServiceActionParameters: output.ServiceActionParameters !== undefined && output.ServiceActionParameters !== null
            ? deserializeAws_json1_1ExecutionParameters(output.ServiceActionParameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeServiceActionOutput = (output, context) => {
    return {
        ServiceActionDetail: output.ServiceActionDetail !== undefined && output.ServiceActionDetail !== null
            ? deserializeAws_json1_1ServiceActionDetail(output.ServiceActionDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTagOptionOutput = (output, context) => {
    return {
        TagOptionDetail: output.TagOptionDetail !== undefined && output.TagOptionDetail !== null
            ? deserializeAws_json1_1TagOptionDetail(output.TagOptionDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1DisableAWSOrganizationsAccessOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisassociateBudgetFromResourceOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisassociatePrincipalFromPortfolioOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisassociateProductFromPortfolioOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisassociateTagOptionFromResourceOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DuplicateResourceException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1EnableAWSOrganizationsAccessOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1ExecuteProvisionedProductPlanOutput = (output, context) => {
    return {
        RecordDetail: output.RecordDetail !== undefined && output.RecordDetail !== null
            ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1ExecuteProvisionedProductServiceActionOutput = (output, context) => {
    return {
        RecordDetail: output.RecordDetail !== undefined && output.RecordDetail !== null
            ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1ExecutionParameter = (output, context) => {
    return {
        DefaultValues: output.DefaultValues !== undefined && output.DefaultValues !== null
            ? deserializeAws_json1_1ExecutionParameterValueList(output.DefaultValues, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ExecutionParameters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ExecutionParameter(entry, context);
    });
};
const deserializeAws_json1_1ExecutionParameterValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1FailedServiceActionAssociation = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        ProductId: output.ProductId !== undefined && output.ProductId !== null ? output.ProductId : undefined,
        ProvisioningArtifactId: output.ProvisioningArtifactId !== undefined && output.ProvisioningArtifactId !== null
            ? output.ProvisioningArtifactId
            : undefined,
        ServiceActionId: output.ServiceActionId !== undefined && output.ServiceActionId !== null ? output.ServiceActionId : undefined,
    };
};
const deserializeAws_json1_1FailedServiceActionAssociations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedServiceActionAssociation(entry, context);
    });
};
const deserializeAws_json1_1GetAWSOrganizationsAccessStatusOutput = (output, context) => {
    return {
        AccessStatus: output.AccessStatus !== undefined && output.AccessStatus !== null ? output.AccessStatus : undefined,
    };
};
const deserializeAws_json1_1GetProvisionedProductOutputsOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        Outputs: output.Outputs !== undefined && output.Outputs !== null
            ? deserializeAws_json1_1RecordOutputs(output.Outputs, context)
            : undefined,
    };
};
const deserializeAws_json1_1ImportAsProvisionedProductOutput = (output, context) => {
    return {
        RecordDetail: output.RecordDetail !== undefined && output.RecordDetail !== null
            ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1InvalidParametersException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidStateException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1LaunchPath = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1LaunchPaths = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LaunchPath(entry, context);
    });
};
const deserializeAws_json1_1LaunchPathSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LaunchPathSummary(entry, context);
    });
};
const deserializeAws_json1_1LaunchPathSummary = (output, context) => {
    return {
        ConstraintSummaries: output.ConstraintSummaries !== undefined && output.ConstraintSummaries !== null
            ? deserializeAws_json1_1ConstraintSummaries(output.ConstraintSummaries, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListAcceptedPortfolioSharesOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        PortfolioDetails: output.PortfolioDetails !== undefined && output.PortfolioDetails !== null
            ? deserializeAws_json1_1PortfolioDetails(output.PortfolioDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListBudgetsForResourceOutput = (output, context) => {
    return {
        Budgets: output.Budgets !== undefined && output.Budgets !== null
            ? deserializeAws_json1_1Budgets(output.Budgets, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    };
};
const deserializeAws_json1_1ListConstraintsForPortfolioOutput = (output, context) => {
    return {
        ConstraintDetails: output.ConstraintDetails !== undefined && output.ConstraintDetails !== null
            ? deserializeAws_json1_1ConstraintDetails(output.ConstraintDetails, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    };
};
const deserializeAws_json1_1ListLaunchPathsOutput = (output, context) => {
    return {
        LaunchPathSummaries: output.LaunchPathSummaries !== undefined && output.LaunchPathSummaries !== null
            ? deserializeAws_json1_1LaunchPathSummaries(output.LaunchPathSummaries, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    };
};
const deserializeAws_json1_1ListOrganizationPortfolioAccessOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        OrganizationNodes: output.OrganizationNodes !== undefined && output.OrganizationNodes !== null
            ? deserializeAws_json1_1OrganizationNodes(output.OrganizationNodes, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListPortfolioAccessOutput = (output, context) => {
    return {
        AccountIds: output.AccountIds !== undefined && output.AccountIds !== null
            ? deserializeAws_json1_1AccountIds(output.AccountIds, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    };
};
const deserializeAws_json1_1ListPortfoliosForProductOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        PortfolioDetails: output.PortfolioDetails !== undefined && output.PortfolioDetails !== null
            ? deserializeAws_json1_1PortfolioDetails(output.PortfolioDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListPortfoliosOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        PortfolioDetails: output.PortfolioDetails !== undefined && output.PortfolioDetails !== null
            ? deserializeAws_json1_1PortfolioDetails(output.PortfolioDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListPrincipalsForPortfolioOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        Principals: output.Principals !== undefined && output.Principals !== null
            ? deserializeAws_json1_1Principals(output.Principals, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListProvisionedProductPlansOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ProvisionedProductPlans: output.ProvisionedProductPlans !== undefined && output.ProvisionedProductPlans !== null
            ? deserializeAws_json1_1ProvisionedProductPlans(output.ProvisionedProductPlans, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListProvisioningArtifactsForServiceActionOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ProvisioningArtifactViews: output.ProvisioningArtifactViews !== undefined && output.ProvisioningArtifactViews !== null
            ? deserializeAws_json1_1ProvisioningArtifactViews(output.ProvisioningArtifactViews, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListProvisioningArtifactsOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ProvisioningArtifactDetails: output.ProvisioningArtifactDetails !== undefined && output.ProvisioningArtifactDetails !== null
            ? deserializeAws_json1_1ProvisioningArtifactDetails(output.ProvisioningArtifactDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListRecordHistoryOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        RecordDetails: output.RecordDetails !== undefined && output.RecordDetails !== null
            ? deserializeAws_json1_1RecordDetails(output.RecordDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListResourcesForTagOptionOutput = (output, context) => {
    return {
        PageToken: output.PageToken !== undefined && output.PageToken !== null ? output.PageToken : undefined,
        ResourceDetails: output.ResourceDetails !== undefined && output.ResourceDetails !== null
            ? deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListServiceActionsForProvisioningArtifactOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ServiceActionSummaries: output.ServiceActionSummaries !== undefined && output.ServiceActionSummaries !== null
            ? deserializeAws_json1_1ServiceActionSummaries(output.ServiceActionSummaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListServiceActionsOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ServiceActionSummaries: output.ServiceActionSummaries !== undefined && output.ServiceActionSummaries !== null
            ? deserializeAws_json1_1ServiceActionSummaries(output.ServiceActionSummaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListStackInstancesForProvisionedProductOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        StackInstances: output.StackInstances !== undefined && output.StackInstances !== null
            ? deserializeAws_json1_1StackInstances(output.StackInstances, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagOptionsOutput = (output, context) => {
    return {
        PageToken: output.PageToken !== undefined && output.PageToken !== null ? output.PageToken : undefined,
        TagOptionDetails: output.TagOptionDetails !== undefined && output.TagOptionDetails !== null
            ? deserializeAws_json1_1TagOptionDetails(output.TagOptionDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1Namespaces = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1NotificationArns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1OperationNotSupportedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1OrganizationNode = (output, context) => {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1OrganizationNodes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationNode(entry, context);
    });
};
const deserializeAws_json1_1ParameterConstraints = (output, context) => {
    return {
        AllowedPattern: output.AllowedPattern !== undefined && output.AllowedPattern !== null ? output.AllowedPattern : undefined,
        AllowedValues: output.AllowedValues !== undefined && output.AllowedValues !== null
            ? deserializeAws_json1_1AllowedValues(output.AllowedValues, context)
            : undefined,
        ConstraintDescription: output.ConstraintDescription !== undefined && output.ConstraintDescription !== null
            ? output.ConstraintDescription
            : undefined,
        MaxLength: output.MaxLength !== undefined && output.MaxLength !== null ? output.MaxLength : undefined,
        MaxValue: output.MaxValue !== undefined && output.MaxValue !== null ? output.MaxValue : undefined,
        MinLength: output.MinLength !== undefined && output.MinLength !== null ? output.MinLength : undefined,
        MinValue: output.MinValue !== undefined && output.MinValue !== null ? output.MinValue : undefined,
    };
};
const deserializeAws_json1_1PortfolioDetail = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ProviderName: output.ProviderName !== undefined && output.ProviderName !== null ? output.ProviderName : undefined,
    };
};
const deserializeAws_json1_1PortfolioDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PortfolioDetail(entry, context);
    });
};
const deserializeAws_json1_1PortfolioShareDetail = (output, context) => {
    return {
        Accepted: output.Accepted !== undefined && output.Accepted !== null ? output.Accepted : undefined,
        PrincipalId: output.PrincipalId !== undefined && output.PrincipalId !== null ? output.PrincipalId : undefined,
        ShareTagOptions: output.ShareTagOptions !== undefined && output.ShareTagOptions !== null ? output.ShareTagOptions : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1PortfolioShareDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PortfolioShareDetail(entry, context);
    });
};
const deserializeAws_json1_1Principal = (output, context) => {
    return {
        PrincipalARN: output.PrincipalARN !== undefined && output.PrincipalARN !== null ? output.PrincipalARN : undefined,
        PrincipalType: output.PrincipalType !== undefined && output.PrincipalType !== null ? output.PrincipalType : undefined,
    };
};
const deserializeAws_json1_1Principals = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Principal(entry, context);
    });
};
const deserializeAws_json1_1ProductViewAggregations = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1ProductViewAggregationValues(value, context),
        };
    }, {});
};
const deserializeAws_json1_1ProductViewAggregationValue = (output, context) => {
    return {
        ApproximateCount: output.ApproximateCount !== undefined && output.ApproximateCount !== null ? output.ApproximateCount : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1ProductViewAggregationValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProductViewAggregationValue(entry, context);
    });
};
const deserializeAws_json1_1ProductViewDetail = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        ProductARN: output.ProductARN !== undefined && output.ProductARN !== null ? output.ProductARN : undefined,
        ProductViewSummary: output.ProductViewSummary !== undefined && output.ProductViewSummary !== null
            ? deserializeAws_json1_1ProductViewSummary(output.ProductViewSummary, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1ProductViewDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProductViewDetail(entry, context);
    });
};
const deserializeAws_json1_1ProductViewSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProductViewSummary(entry, context);
    });
};
const deserializeAws_json1_1ProductViewSummary = (output, context) => {
    return {
        Distributor: output.Distributor !== undefined && output.Distributor !== null ? output.Distributor : undefined,
        HasDefaultPath: output.HasDefaultPath !== undefined && output.HasDefaultPath !== null ? output.HasDefaultPath : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        ProductId: output.ProductId !== undefined && output.ProductId !== null ? output.ProductId : undefined,
        ShortDescription: output.ShortDescription !== undefined && output.ShortDescription !== null ? output.ShortDescription : undefined,
        SupportDescription: output.SupportDescription !== undefined && output.SupportDescription !== null
            ? output.SupportDescription
            : undefined,
        SupportEmail: output.SupportEmail !== undefined && output.SupportEmail !== null ? output.SupportEmail : undefined,
        SupportUrl: output.SupportUrl !== undefined && output.SupportUrl !== null ? output.SupportUrl : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ProvisionedProductAttribute = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IdempotencyToken: output.IdempotencyToken !== undefined && output.IdempotencyToken !== null ? output.IdempotencyToken : undefined,
        LastProvisioningRecordId: output.LastProvisioningRecordId !== undefined && output.LastProvisioningRecordId !== null
            ? output.LastProvisioningRecordId
            : undefined,
        LastRecordId: output.LastRecordId !== undefined && output.LastRecordId !== null ? output.LastRecordId : undefined,
        LastSuccessfulProvisioningRecordId: output.LastSuccessfulProvisioningRecordId !== undefined && output.LastSuccessfulProvisioningRecordId !== null
            ? output.LastSuccessfulProvisioningRecordId
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PhysicalId: output.PhysicalId !== undefined && output.PhysicalId !== null ? output.PhysicalId : undefined,
        ProductId: output.ProductId !== undefined && output.ProductId !== null ? output.ProductId : undefined,
        ProductName: output.ProductName !== undefined && output.ProductName !== null ? output.ProductName : undefined,
        ProvisioningArtifactId: output.ProvisioningArtifactId !== undefined && output.ProvisioningArtifactId !== null
            ? output.ProvisioningArtifactId
            : undefined,
        ProvisioningArtifactName: output.ProvisioningArtifactName !== undefined && output.ProvisioningArtifactName !== null
            ? output.ProvisioningArtifactName
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        UserArn: output.UserArn !== undefined && output.UserArn !== null ? output.UserArn : undefined,
        UserArnSession: output.UserArnSession !== undefined && output.UserArnSession !== null ? output.UserArnSession : undefined,
    };
};
const deserializeAws_json1_1ProvisionedProductAttributes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisionedProductAttribute(entry, context);
    });
};
const deserializeAws_json1_1ProvisionedProductDetail = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IdempotencyToken: output.IdempotencyToken !== undefined && output.IdempotencyToken !== null ? output.IdempotencyToken : undefined,
        LastProvisioningRecordId: output.LastProvisioningRecordId !== undefined && output.LastProvisioningRecordId !== null
            ? output.LastProvisioningRecordId
            : undefined,
        LastRecordId: output.LastRecordId !== undefined && output.LastRecordId !== null ? output.LastRecordId : undefined,
        LastSuccessfulProvisioningRecordId: output.LastSuccessfulProvisioningRecordId !== undefined && output.LastSuccessfulProvisioningRecordId !== null
            ? output.LastSuccessfulProvisioningRecordId
            : undefined,
        LaunchRoleArn: output.LaunchRoleArn !== undefined && output.LaunchRoleArn !== null ? output.LaunchRoleArn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ProductId: output.ProductId !== undefined && output.ProductId !== null ? output.ProductId : undefined,
        ProvisioningArtifactId: output.ProvisioningArtifactId !== undefined && output.ProvisioningArtifactId !== null
            ? output.ProvisioningArtifactId
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ProvisionedProductDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisionedProductDetail(entry, context);
    });
};
const deserializeAws_json1_1ProvisionedProductPlanDetails = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        NotificationArns: output.NotificationArns !== undefined && output.NotificationArns !== null
            ? deserializeAws_json1_1NotificationArns(output.NotificationArns, context)
            : undefined,
        PathId: output.PathId !== undefined && output.PathId !== null ? output.PathId : undefined,
        PlanId: output.PlanId !== undefined && output.PlanId !== null ? output.PlanId : undefined,
        PlanName: output.PlanName !== undefined && output.PlanName !== null ? output.PlanName : undefined,
        PlanType: output.PlanType !== undefined && output.PlanType !== null ? output.PlanType : undefined,
        ProductId: output.ProductId !== undefined && output.ProductId !== null ? output.ProductId : undefined,
        ProvisionProductId: output.ProvisionProductId !== undefined && output.ProvisionProductId !== null
            ? output.ProvisionProductId
            : undefined,
        ProvisionProductName: output.ProvisionProductName !== undefined && output.ProvisionProductName !== null
            ? output.ProvisionProductName
            : undefined,
        ProvisioningArtifactId: output.ProvisioningArtifactId !== undefined && output.ProvisioningArtifactId !== null
            ? output.ProvisioningArtifactId
            : undefined,
        ProvisioningParameters: output.ProvisioningParameters !== undefined && output.ProvisioningParameters !== null
            ? deserializeAws_json1_1UpdateProvisioningParameters(output.ProvisioningParameters, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
        UpdatedTime: output.UpdatedTime !== undefined && output.UpdatedTime !== null
            ? new Date(Math.round(output.UpdatedTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1ProvisionedProductPlans = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisionedProductPlanSummary(entry, context);
    });
};
const deserializeAws_json1_1ProvisionedProductPlanSummary = (output, context) => {
    return {
        PlanId: output.PlanId !== undefined && output.PlanId !== null ? output.PlanId : undefined,
        PlanName: output.PlanName !== undefined && output.PlanName !== null ? output.PlanName : undefined,
        PlanType: output.PlanType !== undefined && output.PlanType !== null ? output.PlanType : undefined,
        ProvisionProductId: output.ProvisionProductId !== undefined && output.ProvisionProductId !== null
            ? output.ProvisionProductId
            : undefined,
        ProvisionProductName: output.ProvisionProductName !== undefined && output.ProvisionProductName !== null
            ? output.ProvisionProductName
            : undefined,
        ProvisioningArtifactId: output.ProvisioningArtifactId !== undefined && output.ProvisioningArtifactId !== null
            ? output.ProvisioningArtifactId
            : undefined,
    };
};
const deserializeAws_json1_1ProvisionedProductProperties = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1ProvisioningArtifact = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Guidance: output.Guidance !== undefined && output.Guidance !== null ? output.Guidance : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1ProvisioningArtifactDetail = (output, context) => {
    return {
        Active: output.Active !== undefined && output.Active !== null ? output.Active : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Guidance: output.Guidance !== undefined && output.Guidance !== null ? output.Guidance : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ProvisioningArtifactDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisioningArtifactDetail(entry, context);
    });
};
const deserializeAws_json1_1ProvisioningArtifactInfo = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1ProvisioningArtifactOutput = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    };
};
const deserializeAws_json1_1ProvisioningArtifactOutputs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisioningArtifactOutput(entry, context);
    });
};
const deserializeAws_json1_1ProvisioningArtifactParameter = (output, context) => {
    return {
        DefaultValue: output.DefaultValue !== undefined && output.DefaultValue !== null ? output.DefaultValue : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IsNoEcho: output.IsNoEcho !== undefined && output.IsNoEcho !== null ? output.IsNoEcho : undefined,
        ParameterConstraints: output.ParameterConstraints !== undefined && output.ParameterConstraints !== null
            ? deserializeAws_json1_1ParameterConstraints(output.ParameterConstraints, context)
            : undefined,
        ParameterKey: output.ParameterKey !== undefined && output.ParameterKey !== null ? output.ParameterKey : undefined,
        ParameterType: output.ParameterType !== undefined && output.ParameterType !== null ? output.ParameterType : undefined,
    };
};
const deserializeAws_json1_1ProvisioningArtifactParameters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisioningArtifactParameter(entry, context);
    });
};
const deserializeAws_json1_1ProvisioningArtifactPreferences = (output, context) => {
    return {
        StackSetAccounts: output.StackSetAccounts !== undefined && output.StackSetAccounts !== null
            ? deserializeAws_json1_1StackSetAccounts(output.StackSetAccounts, context)
            : undefined,
        StackSetRegions: output.StackSetRegions !== undefined && output.StackSetRegions !== null
            ? deserializeAws_json1_1StackSetRegions(output.StackSetRegions, context)
            : undefined,
    };
};
const deserializeAws_json1_1ProvisioningArtifacts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisioningArtifact(entry, context);
    });
};
const deserializeAws_json1_1ProvisioningArtifactSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisioningArtifactSummary(entry, context);
    });
};
const deserializeAws_json1_1ProvisioningArtifactSummary = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ProvisioningArtifactMetadata: output.ProvisioningArtifactMetadata !== undefined && output.ProvisioningArtifactMetadata !== null
            ? deserializeAws_json1_1ProvisioningArtifactInfo(output.ProvisioningArtifactMetadata, context)
            : undefined,
    };
};
const deserializeAws_json1_1ProvisioningArtifactView = (output, context) => {
    return {
        ProductViewSummary: output.ProductViewSummary !== undefined && output.ProductViewSummary !== null
            ? deserializeAws_json1_1ProductViewSummary(output.ProductViewSummary, context)
            : undefined,
        ProvisioningArtifact: output.ProvisioningArtifact !== undefined && output.ProvisioningArtifact !== null
            ? deserializeAws_json1_1ProvisioningArtifact(output.ProvisioningArtifact, context)
            : undefined,
    };
};
const deserializeAws_json1_1ProvisioningArtifactViews = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisioningArtifactView(entry, context);
    });
};
const deserializeAws_json1_1ProvisionProductOutput = (output, context) => {
    return {
        RecordDetail: output.RecordDetail !== undefined && output.RecordDetail !== null
            ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1RecordDetail = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        LaunchRoleArn: output.LaunchRoleArn !== undefined && output.LaunchRoleArn !== null ? output.LaunchRoleArn : undefined,
        PathId: output.PathId !== undefined && output.PathId !== null ? output.PathId : undefined,
        ProductId: output.ProductId !== undefined && output.ProductId !== null ? output.ProductId : undefined,
        ProvisionedProductId: output.ProvisionedProductId !== undefined && output.ProvisionedProductId !== null
            ? output.ProvisionedProductId
            : undefined,
        ProvisionedProductName: output.ProvisionedProductName !== undefined && output.ProvisionedProductName !== null
            ? output.ProvisionedProductName
            : undefined,
        ProvisionedProductType: output.ProvisionedProductType !== undefined && output.ProvisionedProductType !== null
            ? output.ProvisionedProductType
            : undefined,
        ProvisioningArtifactId: output.ProvisioningArtifactId !== undefined && output.ProvisioningArtifactId !== null
            ? output.ProvisioningArtifactId
            : undefined,
        RecordErrors: output.RecordErrors !== undefined && output.RecordErrors !== null
            ? deserializeAws_json1_1RecordErrors(output.RecordErrors, context)
            : undefined,
        RecordId: output.RecordId !== undefined && output.RecordId !== null ? output.RecordId : undefined,
        RecordTags: output.RecordTags !== undefined && output.RecordTags !== null
            ? deserializeAws_json1_1RecordTags(output.RecordTags, context)
            : undefined,
        RecordType: output.RecordType !== undefined && output.RecordType !== null ? output.RecordType : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdatedTime: output.UpdatedTime !== undefined && output.UpdatedTime !== null
            ? new Date(Math.round(output.UpdatedTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1RecordDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RecordDetail(entry, context);
    });
};
const deserializeAws_json1_1RecordError = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    };
};
const deserializeAws_json1_1RecordErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RecordError(entry, context);
    });
};
const deserializeAws_json1_1RecordOutput = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        OutputKey: output.OutputKey !== undefined && output.OutputKey !== null ? output.OutputKey : undefined,
        OutputValue: output.OutputValue !== undefined && output.OutputValue !== null ? output.OutputValue : undefined,
    };
};
const deserializeAws_json1_1RecordOutputs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RecordOutput(entry, context);
    });
};
const deserializeAws_json1_1RecordTag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1RecordTags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RecordTag(entry, context);
    });
};
const deserializeAws_json1_1RejectPortfolioShareOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1ResourceChange = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        Details: output.Details !== undefined && output.Details !== null
            ? deserializeAws_json1_1ResourceChangeDetails(output.Details, context)
            : undefined,
        LogicalResourceId: output.LogicalResourceId !== undefined && output.LogicalResourceId !== null
            ? output.LogicalResourceId
            : undefined,
        PhysicalResourceId: output.PhysicalResourceId !== undefined && output.PhysicalResourceId !== null
            ? output.PhysicalResourceId
            : undefined,
        Replacement: output.Replacement !== undefined && output.Replacement !== null ? output.Replacement : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        Scope: output.Scope !== undefined && output.Scope !== null
            ? deserializeAws_json1_1Scope(output.Scope, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceChangeDetail = (output, context) => {
    return {
        CausingEntity: output.CausingEntity !== undefined && output.CausingEntity !== null ? output.CausingEntity : undefined,
        Evaluation: output.Evaluation !== undefined && output.Evaluation !== null ? output.Evaluation : undefined,
        Target: output.Target !== undefined && output.Target !== null
            ? deserializeAws_json1_1ResourceTargetDefinition(output.Target, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceChangeDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceChangeDetail(entry, context);
    });
};
const deserializeAws_json1_1ResourceChanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceChange(entry, context);
    });
};
const deserializeAws_json1_1ResourceDetail = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1ResourceDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceDetail(entry, context);
    });
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceTargetDefinition = (output, context) => {
    return {
        Attribute: output.Attribute !== undefined && output.Attribute !== null ? output.Attribute : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RequiresRecreation: output.RequiresRecreation !== undefined && output.RequiresRecreation !== null
            ? output.RequiresRecreation
            : undefined,
    };
};
const deserializeAws_json1_1ScanProvisionedProductsOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ProvisionedProducts: output.ProvisionedProducts !== undefined && output.ProvisionedProducts !== null
            ? deserializeAws_json1_1ProvisionedProductDetails(output.ProvisionedProducts, context)
            : undefined,
    };
};
const deserializeAws_json1_1Scope = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SearchProductsAsAdminOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ProductViewDetails: output.ProductViewDetails !== undefined && output.ProductViewDetails !== null
            ? deserializeAws_json1_1ProductViewDetails(output.ProductViewDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1SearchProductsOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ProductViewAggregations: output.ProductViewAggregations !== undefined && output.ProductViewAggregations !== null
            ? deserializeAws_json1_1ProductViewAggregations(output.ProductViewAggregations, context)
            : undefined,
        ProductViewSummaries: output.ProductViewSummaries !== undefined && output.ProductViewSummaries !== null
            ? deserializeAws_json1_1ProductViewSummaries(output.ProductViewSummaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1SearchProvisionedProductsOutput = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ProvisionedProducts: output.ProvisionedProducts !== undefined && output.ProvisionedProducts !== null
            ? deserializeAws_json1_1ProvisionedProductAttributes(output.ProvisionedProducts, context)
            : undefined,
        TotalResultsCount: output.TotalResultsCount !== undefined && output.TotalResultsCount !== null
            ? output.TotalResultsCount
            : undefined,
    };
};
const deserializeAws_json1_1ServiceActionDefinitionMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1ServiceActionDetail = (output, context) => {
    return {
        Definition: output.Definition !== undefined && output.Definition !== null
            ? deserializeAws_json1_1ServiceActionDefinitionMap(output.Definition, context)
            : undefined,
        ServiceActionSummary: output.ServiceActionSummary !== undefined && output.ServiceActionSummary !== null
            ? deserializeAws_json1_1ServiceActionSummary(output.ServiceActionSummary, context)
            : undefined,
    };
};
const deserializeAws_json1_1ServiceActionSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServiceActionSummary(entry, context);
    });
};
const deserializeAws_json1_1ServiceActionSummary = (output, context) => {
    return {
        DefinitionType: output.DefinitionType !== undefined && output.DefinitionType !== null ? output.DefinitionType : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1ShareDetails = (output, context) => {
    return {
        ShareErrors: output.ShareErrors !== undefined && output.ShareErrors !== null
            ? deserializeAws_json1_1ShareErrors(output.ShareErrors, context)
            : undefined,
        SuccessfulShares: output.SuccessfulShares !== undefined && output.SuccessfulShares !== null
            ? deserializeAws_json1_1SuccessfulShares(output.SuccessfulShares, context)
            : undefined,
    };
};
const deserializeAws_json1_1ShareError = (output, context) => {
    return {
        Accounts: output.Accounts !== undefined && output.Accounts !== null
            ? deserializeAws_json1_1Namespaces(output.Accounts, context)
            : undefined,
        Error: output.Error !== undefined && output.Error !== null ? output.Error : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ShareErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ShareError(entry, context);
    });
};
const deserializeAws_json1_1StackInstance = (output, context) => {
    return {
        Account: output.Account !== undefined && output.Account !== null ? output.Account : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        StackInstanceStatus: output.StackInstanceStatus !== undefined && output.StackInstanceStatus !== null
            ? output.StackInstanceStatus
            : undefined,
    };
};
const deserializeAws_json1_1StackInstances = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StackInstance(entry, context);
    });
};
const deserializeAws_json1_1StackSetAccounts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1StackSetRegions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SuccessfulShares = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagOptionDetail = (output, context) => {
    return {
        Active: output.Active !== undefined && output.Active !== null ? output.Active : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagOptionDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TagOptionDetail(entry, context);
    });
};
const deserializeAws_json1_1TagOptionNotMigratedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1TagOptionSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TagOptionSummary(entry, context);
    });
};
const deserializeAws_json1_1TagOptionSummary = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1TagOptionValues(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1TagOptionValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TerminateProvisionedProductOutput = (output, context) => {
    return {
        RecordDetail: output.RecordDetail !== undefined && output.RecordDetail !== null
            ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateConstraintOutput = (output, context) => {
    return {
        ConstraintDetail: output.ConstraintDetail !== undefined && output.ConstraintDetail !== null
            ? deserializeAws_json1_1ConstraintDetail(output.ConstraintDetail, context)
            : undefined,
        ConstraintParameters: output.ConstraintParameters !== undefined && output.ConstraintParameters !== null
            ? output.ConstraintParameters
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1UpdatePortfolioOutput = (output, context) => {
    return {
        PortfolioDetail: output.PortfolioDetail !== undefined && output.PortfolioDetail !== null
            ? deserializeAws_json1_1PortfolioDetail(output.PortfolioDetail, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1UpdatePortfolioShareOutput = (output, context) => {
    return {
        PortfolioShareToken: output.PortfolioShareToken !== undefined && output.PortfolioShareToken !== null
            ? output.PortfolioShareToken
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1UpdateProductOutput = (output, context) => {
    return {
        ProductViewDetail: output.ProductViewDetail !== undefined && output.ProductViewDetail !== null
            ? deserializeAws_json1_1ProductViewDetail(output.ProductViewDetail, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1UpdateProvisionedProductOutput = (output, context) => {
    return {
        RecordDetail: output.RecordDetail !== undefined && output.RecordDetail !== null
            ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateProvisionedProductPropertiesOutput = (output, context) => {
    return {
        ProvisionedProductId: output.ProvisionedProductId !== undefined && output.ProvisionedProductId !== null
            ? output.ProvisionedProductId
            : undefined,
        ProvisionedProductProperties: output.ProvisionedProductProperties !== undefined && output.ProvisionedProductProperties !== null
            ? deserializeAws_json1_1ProvisionedProductProperties(output.ProvisionedProductProperties, context)
            : undefined,
        RecordId: output.RecordId !== undefined && output.RecordId !== null ? output.RecordId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1UpdateProvisioningArtifactOutput = (output, context) => {
    return {
        Info: output.Info !== undefined && output.Info !== null
            ? deserializeAws_json1_1ProvisioningArtifactInfo(output.Info, context)
            : undefined,
        ProvisioningArtifactDetail: output.ProvisioningArtifactDetail !== undefined && output.ProvisioningArtifactDetail !== null
            ? deserializeAws_json1_1ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1UpdateProvisioningParameter = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        UsePreviousValue: output.UsePreviousValue !== undefined && output.UsePreviousValue !== null ? output.UsePreviousValue : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1UpdateProvisioningParameters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UpdateProvisioningParameter(entry, context);
    });
};
const deserializeAws_json1_1UpdateServiceActionOutput = (output, context) => {
    return {
        ServiceActionDetail: output.ServiceActionDetail !== undefined && output.ServiceActionDetail !== null
            ? deserializeAws_json1_1ServiceActionDetail(output.ServiceActionDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateTagOptionOutput = (output, context) => {
    return {
        TagOptionDetail: output.TagOptionDetail !== undefined && output.TagOptionDetail !== null
            ? deserializeAws_json1_1TagOptionDetail(output.TagOptionDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1UsageInstruction = (output, context) => {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1UsageInstructions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UsageInstruction(entry, context);
    });
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_json1_1.js.map