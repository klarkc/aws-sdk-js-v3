import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_json1_1AcceptPortfolioShareCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.AcceptPortfolioShare",
        };
        body = JSON.stringify(serializeAws_json1_1AcceptPortfolioShareInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AssociateBudgetWithResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.AssociateBudgetWithResource",
        };
        body = JSON.stringify(serializeAws_json1_1AssociateBudgetWithResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AssociatePrincipalWithPortfolioCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio",
        };
        body = JSON.stringify(serializeAws_json1_1AssociatePrincipalWithPortfolioInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AssociateProductWithPortfolioCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.AssociateProductWithPortfolio",
        };
        body = JSON.stringify(serializeAws_json1_1AssociateProductWithPortfolioInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact",
        };
        body = JSON.stringify(serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AssociateTagOptionWithResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.AssociateTagOptionWithResource",
        };
        body = JSON.stringify(serializeAws_json1_1AssociateTagOptionWithResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact",
        };
        body = JSON.stringify(serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact",
        };
        body = JSON.stringify(serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CopyProductCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.CopyProduct",
        };
        body = JSON.stringify(serializeAws_json1_1CopyProductInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateConstraintCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.CreateConstraint",
        };
        body = JSON.stringify(serializeAws_json1_1CreateConstraintInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreatePortfolioCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.CreatePortfolio",
        };
        body = JSON.stringify(serializeAws_json1_1CreatePortfolioInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreatePortfolioShareCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.CreatePortfolioShare",
        };
        body = JSON.stringify(serializeAws_json1_1CreatePortfolioShareInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateProductCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.CreateProduct",
        };
        body = JSON.stringify(serializeAws_json1_1CreateProductInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateProvisionedProductPlanCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.CreateProvisionedProductPlan",
        };
        body = JSON.stringify(serializeAws_json1_1CreateProvisionedProductPlanInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateProvisioningArtifactCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.CreateProvisioningArtifact",
        };
        body = JSON.stringify(serializeAws_json1_1CreateProvisioningArtifactInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateServiceActionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.CreateServiceAction",
        };
        body = JSON.stringify(serializeAws_json1_1CreateServiceActionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateTagOptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.CreateTagOption",
        };
        body = JSON.stringify(serializeAws_json1_1CreateTagOptionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteConstraintCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DeleteConstraint",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteConstraintInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeletePortfolioCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DeletePortfolio",
        };
        body = JSON.stringify(serializeAws_json1_1DeletePortfolioInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeletePortfolioShareCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DeletePortfolioShare",
        };
        body = JSON.stringify(serializeAws_json1_1DeletePortfolioShareInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteProductCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DeleteProduct",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteProductInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteProvisionedProductPlanCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DeleteProvisionedProductPlan",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteProvisionedProductPlanInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteProvisioningArtifactCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DeleteProvisioningArtifact",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteProvisioningArtifactInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteServiceActionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DeleteServiceAction",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteServiceActionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteTagOptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DeleteTagOption",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteTagOptionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeConstraintCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribeConstraint",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeConstraintInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeCopyProductStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribeCopyProductStatus",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeCopyProductStatusInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribePortfolioCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribePortfolio",
        };
        body = JSON.stringify(serializeAws_json1_1DescribePortfolioInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribePortfolioSharesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribePortfolioShares",
        };
        body = JSON.stringify(serializeAws_json1_1DescribePortfolioSharesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribePortfolioShareStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribePortfolioShareStatus",
        };
        body = JSON.stringify(serializeAws_json1_1DescribePortfolioShareStatusInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeProductCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribeProduct",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeProductInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeProductAsAdminCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribeProductAsAdmin",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeProductAsAdminInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeProductViewCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribeProductView",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeProductViewInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeProvisionedProductCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribeProvisionedProduct",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeProvisionedProductInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeProvisionedProductPlanCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribeProvisionedProductPlan",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeProvisionedProductPlanInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeProvisioningArtifactCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribeProvisioningArtifact",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeProvisioningArtifactInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeProvisioningParametersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribeProvisioningParameters",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeProvisioningParametersInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeRecordCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribeRecord",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeRecordInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeServiceActionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribeServiceAction",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeServiceActionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeServiceActionExecutionParametersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeServiceActionExecutionParametersInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeTagOptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DescribeTagOption",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeTagOptionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisableAWSOrganizationsAccessCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DisableAWSOrganizationsAccess",
        };
        body = JSON.stringify(serializeAws_json1_1DisableAWSOrganizationsAccessInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisassociateBudgetFromResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DisassociateBudgetFromResource",
        };
        body = JSON.stringify(serializeAws_json1_1DisassociateBudgetFromResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisassociatePrincipalFromPortfolioCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio",
        };
        body = JSON.stringify(serializeAws_json1_1DisassociatePrincipalFromPortfolioInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisassociateProductFromPortfolioCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DisassociateProductFromPortfolio",
        };
        body = JSON.stringify(serializeAws_json1_1DisassociateProductFromPortfolioInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact",
        };
        body = JSON.stringify(serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisassociateTagOptionFromResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.DisassociateTagOptionFromResource",
        };
        body = JSON.stringify(serializeAws_json1_1DisassociateTagOptionFromResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1EnableAWSOrganizationsAccessCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.EnableAWSOrganizationsAccess",
        };
        body = JSON.stringify(serializeAws_json1_1EnableAWSOrganizationsAccessInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ExecuteProvisionedProductPlanCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ExecuteProvisionedProductPlan",
        };
        body = JSON.stringify(serializeAws_json1_1ExecuteProvisionedProductPlanInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction",
        };
        body = JSON.stringify(serializeAws_json1_1ExecuteProvisionedProductServiceActionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAWSOrganizationsAccessStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus",
        };
        body = JSON.stringify(serializeAws_json1_1GetAWSOrganizationsAccessStatusInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetProvisionedProductOutputsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.GetProvisionedProductOutputs",
        };
        body = JSON.stringify(serializeAws_json1_1GetProvisionedProductOutputsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ImportAsProvisionedProductCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ImportAsProvisionedProduct",
        };
        body = JSON.stringify(serializeAws_json1_1ImportAsProvisionedProductInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListAcceptedPortfolioSharesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListAcceptedPortfolioShares",
        };
        body = JSON.stringify(serializeAws_json1_1ListAcceptedPortfolioSharesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListBudgetsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListBudgetsForResource",
        };
        body = JSON.stringify(serializeAws_json1_1ListBudgetsForResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListConstraintsForPortfolioCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListConstraintsForPortfolio",
        };
        body = JSON.stringify(serializeAws_json1_1ListConstraintsForPortfolioInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListLaunchPathsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListLaunchPaths",
        };
        body = JSON.stringify(serializeAws_json1_1ListLaunchPathsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListOrganizationPortfolioAccessCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListOrganizationPortfolioAccess",
        };
        body = JSON.stringify(serializeAws_json1_1ListOrganizationPortfolioAccessInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListPortfolioAccessCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListPortfolioAccess",
        };
        body = JSON.stringify(serializeAws_json1_1ListPortfolioAccessInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListPortfoliosCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListPortfolios",
        };
        body = JSON.stringify(serializeAws_json1_1ListPortfoliosInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListPortfoliosForProductCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListPortfoliosForProduct",
        };
        body = JSON.stringify(serializeAws_json1_1ListPortfoliosForProductInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListPrincipalsForPortfolioCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListPrincipalsForPortfolio",
        };
        body = JSON.stringify(serializeAws_json1_1ListPrincipalsForPortfolioInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListProvisionedProductPlansCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListProvisionedProductPlans",
        };
        body = JSON.stringify(serializeAws_json1_1ListProvisionedProductPlansInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListProvisioningArtifactsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListProvisioningArtifacts",
        };
        body = JSON.stringify(serializeAws_json1_1ListProvisioningArtifactsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction",
        };
        body = JSON.stringify(serializeAws_json1_1ListProvisioningArtifactsForServiceActionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListRecordHistoryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListRecordHistory",
        };
        body = JSON.stringify(serializeAws_json1_1ListRecordHistoryInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListResourcesForTagOptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListResourcesForTagOption",
        };
        body = JSON.stringify(serializeAws_json1_1ListResourcesForTagOptionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListServiceActionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListServiceActions",
        };
        body = JSON.stringify(serializeAws_json1_1ListServiceActionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact",
        };
        body = JSON.stringify(serializeAws_json1_1ListServiceActionsForProvisioningArtifactInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListStackInstancesForProvisionedProductCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct",
        };
        body = JSON.stringify(serializeAws_json1_1ListStackInstancesForProvisionedProductInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagOptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ListTagOptions",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagOptionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ProvisionProductCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ProvisionProduct",
        };
        body = JSON.stringify(serializeAws_json1_1ProvisionProductInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RejectPortfolioShareCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.RejectPortfolioShare",
        };
        body = JSON.stringify(serializeAws_json1_1RejectPortfolioShareInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ScanProvisionedProductsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.ScanProvisionedProducts",
        };
        body = JSON.stringify(serializeAws_json1_1ScanProvisionedProductsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SearchProductsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.SearchProducts",
        };
        body = JSON.stringify(serializeAws_json1_1SearchProductsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SearchProductsAsAdminCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.SearchProductsAsAdmin",
        };
        body = JSON.stringify(serializeAws_json1_1SearchProductsAsAdminInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SearchProvisionedProductsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.SearchProvisionedProducts",
        };
        body = JSON.stringify(serializeAws_json1_1SearchProvisionedProductsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TerminateProvisionedProductCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.TerminateProvisionedProduct",
        };
        body = JSON.stringify(serializeAws_json1_1TerminateProvisionedProductInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateConstraintCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.UpdateConstraint",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateConstraintInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdatePortfolioCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.UpdatePortfolio",
        };
        body = JSON.stringify(serializeAws_json1_1UpdatePortfolioInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdatePortfolioShareCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.UpdatePortfolioShare",
        };
        body = JSON.stringify(serializeAws_json1_1UpdatePortfolioShareInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateProductCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.UpdateProduct",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateProductInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateProvisionedProductCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.UpdateProvisionedProduct",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateProvisionedProductInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateProvisionedProductPropertiesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.UpdateProvisionedProductProperties",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateProvisionedProductPropertiesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateProvisioningArtifactCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.UpdateProvisioningArtifact",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateProvisioningArtifactInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateServiceActionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.UpdateServiceAction",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateServiceActionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateTagOptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWS242ServiceCatalogService.UpdateTagOption",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateTagOptionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AcceptPortfolioShareCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AcceptPortfolioShareCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AcceptPortfolioShareOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AcceptPortfolioShareCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AssociateBudgetWithResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssociateBudgetWithResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AssociateBudgetWithResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AssociateBudgetWithResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InvalidParametersException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AssociatePrincipalWithPortfolioCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssociatePrincipalWithPortfolioCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AssociatePrincipalWithPortfolioOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AssociatePrincipalWithPortfolioCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AssociateProductWithPortfolioCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssociateProductWithPortfolioCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AssociateProductWithPortfolioOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AssociateProductWithPortfolioCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#DuplicateResourceException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1AssociateTagOptionWithResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssociateTagOptionWithResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AssociateTagOptionWithResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AssociateTagOptionWithResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InvalidParametersException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 4];
                    case "InvalidStateException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#InvalidStateException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.servicecatalog#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TagOptionNotMigratedException": return [3 /*break*/, 12];
                    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CopyProductCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CopyProductCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CopyProductOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CopyProductCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateConstraintCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateConstraintCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateConstraintOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateConstraintCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InvalidParametersException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreatePortfolioCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreatePortfolioCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreatePortfolioOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreatePortfolioCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#LimitExceededException": return [3 /*break*/, 4];
                    case "TagOptionNotMigratedException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreatePortfolioShareCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreatePortfolioShareCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreatePortfolioShareOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreatePortfolioShareCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "InvalidStateException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#InvalidStateException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#LimitExceededException": return [3 /*break*/, 6];
                    case "OperationNotSupportedException": return [3 /*break*/, 8];
                    case "com.amazonaws.servicecatalog#OperationNotSupportedException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateProductCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateProductCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateProductOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateProductCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#LimitExceededException": return [3 /*break*/, 4];
                    case "TagOptionNotMigratedException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateProvisionedProductPlanCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateProvisionedProductPlanCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateProvisionedProductPlanOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateProvisionedProductPlanCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "InvalidStateException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#InvalidStateException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateProvisioningArtifactCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateProvisioningArtifactCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateProvisioningArtifactOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateProvisioningArtifactCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateServiceActionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateServiceActionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateServiceActionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateServiceActionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#LimitExceededException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateTagOptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateTagOptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateTagOptionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateTagOptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#DuplicateResourceException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#LimitExceededException": return [3 /*break*/, 4];
                    case "TagOptionNotMigratedException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteConstraintCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteConstraintCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteConstraintOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteConstraintCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeletePortfolioCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeletePortfolioCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeletePortfolioOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeletePortfolioCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "TagOptionNotMigratedException": return [3 /*break*/, 8];
                    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeletePortfolioShareCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeletePortfolioShareCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeletePortfolioShareOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeletePortfolioShareCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "InvalidStateException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#InvalidStateException": return [3 /*break*/, 4];
                    case "OperationNotSupportedException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#OperationNotSupportedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteProductCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteProductCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteProductOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteProductCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "TagOptionNotMigratedException": return [3 /*break*/, 8];
                    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteProvisionedProductPlanCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteProvisionedProductPlanCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteProvisionedProductPlanOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteProvisionedProductPlanCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteProvisioningArtifactCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteProvisioningArtifactCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteProvisioningArtifactOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteProvisioningArtifactCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteServiceActionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteServiceActionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteServiceActionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteServiceActionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceInUseException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#ResourceInUseException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteTagOptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteTagOptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteTagOptionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteTagOptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceInUseException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#ResourceInUseException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "TagOptionNotMigratedException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeConstraintCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeConstraintCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeConstraintOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeConstraintCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeCopyProductStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeCopyProductStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeCopyProductStatusOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeCopyProductStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribePortfolioCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribePortfolioCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribePortfolioOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribePortfolioCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribePortfolioSharesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribePortfolioSharesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribePortfolioSharesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribePortfolioSharesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribePortfolioShareStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribePortfolioShareStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribePortfolioShareStatusOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribePortfolioShareStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "OperationNotSupportedException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#OperationNotSupportedException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeProductCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeProductCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeProductOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeProductCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeProductAsAdminCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeProductAsAdminCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeProductAsAdminOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeProductAsAdminCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeProductViewCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeProductViewCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeProductViewOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeProductViewCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeProvisionedProductCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeProvisionedProductCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeProvisionedProductOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeProvisionedProductCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeProvisionedProductPlanCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeProvisionedProductPlanCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeProvisionedProductPlanOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeProvisionedProductPlanCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeProvisioningArtifactCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeProvisioningArtifactCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeProvisioningArtifactOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeProvisioningArtifactCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeProvisioningParametersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeProvisioningParametersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeProvisioningParametersOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeProvisioningParametersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeRecordCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeRecordCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeRecordOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeRecordCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeServiceActionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeServiceActionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeServiceActionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeServiceActionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeServiceActionExecutionParametersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeServiceActionExecutionParametersOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeServiceActionExecutionParametersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeTagOptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeTagOptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeTagOptionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeTagOptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 2];
                    case "TagOptionNotMigratedException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DisableAWSOrganizationsAccessCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisableAWSOrganizationsAccessCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DisableAWSOrganizationsAccessOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DisableAWSOrganizationsAccessCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidStateException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidStateException": return [3 /*break*/, 2];
                    case "OperationNotSupportedException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#OperationNotSupportedException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DisassociateBudgetFromResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisassociateBudgetFromResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DisassociateBudgetFromResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DisassociateBudgetFromResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DisassociatePrincipalFromPortfolioOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DisassociateProductFromPortfolioCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisassociateProductFromPortfolioCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DisassociateProductFromPortfolioOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DisassociateProductFromPortfolioCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DisassociateTagOptionFromResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisassociateTagOptionFromResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DisassociateTagOptionFromResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DisassociateTagOptionFromResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 2];
                    case "TagOptionNotMigratedException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1EnableAWSOrganizationsAccessCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1EnableAWSOrganizationsAccessCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1EnableAWSOrganizationsAccessOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1EnableAWSOrganizationsAccessCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidStateException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidStateException": return [3 /*break*/, 2];
                    case "OperationNotSupportedException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#OperationNotSupportedException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ExecuteProvisionedProductPlanCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ExecuteProvisionedProductPlanCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ExecuteProvisionedProductPlanOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ExecuteProvisionedProductPlanCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "InvalidStateException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#InvalidStateException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ExecuteProvisionedProductServiceActionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "InvalidStateException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#InvalidStateException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAWSOrganizationsAccessStatusOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "OperationNotSupportedException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#OperationNotSupportedException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetProvisionedProductOutputsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetProvisionedProductOutputsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetProvisionedProductOutputsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetProvisionedProductOutputsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ImportAsProvisionedProductCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ImportAsProvisionedProductCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ImportAsProvisionedProductOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ImportAsProvisionedProductCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InvalidParametersException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 4];
                    case "InvalidStateException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#InvalidStateException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListAcceptedPortfolioSharesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListAcceptedPortfolioSharesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListAcceptedPortfolioSharesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListAcceptedPortfolioSharesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "OperationNotSupportedException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#OperationNotSupportedException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListBudgetsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListBudgetsForResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListBudgetsForResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListBudgetsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListConstraintsForPortfolioCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListConstraintsForPortfolioCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListConstraintsForPortfolioOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListConstraintsForPortfolioCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListLaunchPathsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListLaunchPathsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListLaunchPathsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListLaunchPathsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListOrganizationPortfolioAccessCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListOrganizationPortfolioAccessCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListOrganizationPortfolioAccessOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListOrganizationPortfolioAccessCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "OperationNotSupportedException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#OperationNotSupportedException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListPortfolioAccessCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListPortfolioAccessCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListPortfolioAccessOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListPortfolioAccessCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListPortfoliosCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListPortfoliosCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListPortfoliosOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListPortfoliosCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListPortfoliosForProductCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListPortfoliosForProductCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListPortfoliosForProductOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListPortfoliosForProductCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListPrincipalsForPortfolioCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListPrincipalsForPortfolioCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListPrincipalsForPortfolioOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListPrincipalsForPortfolioCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListProvisionedProductPlansCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListProvisionedProductPlansCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListProvisionedProductPlansOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListProvisionedProductPlansCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListProvisioningArtifactsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListProvisioningArtifactsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListProvisioningArtifactsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListProvisioningArtifactsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListProvisioningArtifactsForServiceActionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListRecordHistoryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListRecordHistoryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListRecordHistoryOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListRecordHistoryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListResourcesForTagOptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListResourcesForTagOptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListResourcesForTagOptionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListResourcesForTagOptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "TagOptionNotMigratedException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListServiceActionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListServiceActionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListServiceActionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListServiceActionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListServiceActionsForProvisioningArtifactOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListStackInstancesForProvisionedProductCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListStackInstancesForProvisionedProductCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListStackInstancesForProvisionedProductOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListStackInstancesForProvisionedProductCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListTagOptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListTagOptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListTagOptionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTagOptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "TagOptionNotMigratedException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ProvisionProductCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ProvisionProductCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ProvisionProductOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ProvisionProductCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InvalidParametersException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1RejectPortfolioShareCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RejectPortfolioShareCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RejectPortfolioShareOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RejectPortfolioShareCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ScanProvisionedProductsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ScanProvisionedProductsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ScanProvisionedProductsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ScanProvisionedProductsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1SearchProductsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SearchProductsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SearchProductsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SearchProductsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1SearchProductsAsAdminCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SearchProductsAsAdminCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SearchProductsAsAdminOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SearchProductsAsAdminCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1SearchProvisionedProductsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SearchProvisionedProductsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SearchProvisionedProductsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SearchProvisionedProductsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1TerminateProvisionedProductCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1TerminateProvisionedProductCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1TerminateProvisionedProductOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1TerminateProvisionedProductCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateConstraintCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateConstraintCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateConstraintOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateConstraintCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdatePortfolioCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdatePortfolioCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdatePortfolioOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdatePortfolioCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "TagOptionNotMigratedException": return [3 /*break*/, 8];
                    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdatePortfolioShareCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdatePortfolioShareCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdatePortfolioShareOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdatePortfolioShareCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "InvalidStateException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#InvalidStateException": return [3 /*break*/, 4];
                    case "OperationNotSupportedException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#OperationNotSupportedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateProductCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateProductCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateProductOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateProductCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "TagOptionNotMigratedException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateProvisionedProductCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateProvisionedProductCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateProvisionedProductOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateProvisionedProductCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateProvisionedProductPropertiesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateProvisionedProductPropertiesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateProvisionedProductPropertiesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateProvisionedProductPropertiesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "InvalidStateException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#InvalidStateException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateProvisioningArtifactCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateProvisioningArtifactCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateProvisioningArtifactOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateProvisioningArtifactCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateServiceActionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateServiceActionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateServiceActionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateServiceActionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParametersException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateTagOptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateTagOptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateTagOptionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateTagOptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.servicecatalog#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InvalidParametersException": return [3 /*break*/, 4];
                    case "com.amazonaws.servicecatalog#InvalidParametersException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.servicecatalog#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "TagOptionNotMigratedException": return [3 /*break*/, 8];
                    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_json1_1DuplicateResourceExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DuplicateResourceException(body, context);
        contents = __assign({ name: "DuplicateResourceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidParametersExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidParametersException(body, context);
        contents = __assign({ name: "InvalidParametersException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidStateExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidStateException(body, context);
        contents = __assign({ name: "InvalidStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1LimitExceededException(body, context);
        contents = __assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1OperationNotSupportedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1OperationNotSupportedException(body, context);
        contents = __assign({ name: "OperationNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
        contents = __assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
        contents = __assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TagOptionNotMigratedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TagOptionNotMigratedException(body, context);
        contents = __assign({ name: "TagOptionNotMigratedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AcceptPortfolioShareInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId })), (input.PortfolioShareType !== undefined &&
        input.PortfolioShareType !== null && { PortfolioShareType: input.PortfolioShareType }));
};
var serializeAws_json1_1AccessLevelFilter = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1AddTags = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1AssociateBudgetWithResourceInput = function (input, context) {
    return __assign(__assign({}, (input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName })), (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }));
};
var serializeAws_json1_1AssociatePrincipalWithPortfolioInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId })), (input.PrincipalARN !== undefined && input.PrincipalARN !== null && { PrincipalARN: input.PrincipalARN })), (input.PrincipalType !== undefined && input.PrincipalType !== null && { PrincipalType: input.PrincipalType }));
};
var serializeAws_json1_1AssociateProductWithPortfolioInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId })), (input.SourcePortfolioId !== undefined &&
        input.SourcePortfolioId !== null && { SourcePortfolioId: input.SourcePortfolioId }));
};
var serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId })), (input.ProvisioningArtifactId !== undefined &&
        input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId })), (input.ServiceActionId !== undefined &&
        input.ServiceActionId !== null && { ServiceActionId: input.ServiceActionId }));
};
var serializeAws_json1_1AssociateTagOptionWithResourceInput = function (input, context) {
    return __assign(__assign({}, (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId })), (input.TagOptionId !== undefined && input.TagOptionId !== null && { TagOptionId: input.TagOptionId }));
};
var serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactInput = function (input, context) {
    return __assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.ServiceActionAssociations !== undefined &&
        input.ServiceActionAssociations !== null && {
        ServiceActionAssociations: serializeAws_json1_1ServiceActionAssociations(input.ServiceActionAssociations, context),
    }));
};
var serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactInput = function (input, context) {
    return __assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.ServiceActionAssociations !== undefined &&
        input.ServiceActionAssociations !== null && {
        ServiceActionAssociations: serializeAws_json1_1ServiceActionAssociations(input.ServiceActionAssociations, context),
    }));
};
var serializeAws_json1_1CopyOptions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1CopyProductInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.CopyOptions !== undefined &&
        input.CopyOptions !== null && { CopyOptions: serializeAws_json1_1CopyOptions(input.CopyOptions, context) })), { IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }), (input.SourceProductArn !== undefined &&
        input.SourceProductArn !== null && { SourceProductArn: input.SourceProductArn })), (input.SourceProvisioningArtifactIdentifiers !== undefined &&
        input.SourceProvisioningArtifactIdentifiers !== null && {
        SourceProvisioningArtifactIdentifiers: serializeAws_json1_1SourceProvisioningArtifactProperties(input.SourceProvisioningArtifactIdentifiers, context),
    })), (input.TargetProductId !== undefined &&
        input.TargetProductId !== null && { TargetProductId: input.TargetProductId })), (input.TargetProductName !== undefined &&
        input.TargetProductName !== null && { TargetProductName: input.TargetProductName }));
};
var serializeAws_json1_1CreateConstraintInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), { IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }), (input.Parameters !== undefined && input.Parameters !== null && { Parameters: input.Parameters })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_1CreatePortfolioInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName })), { IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }), (input.ProviderName !== undefined && input.ProviderName !== null && { ProviderName: input.ProviderName })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1AddTags(input.Tags, context) }));
};
var serializeAws_json1_1CreatePortfolioShareInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.OrganizationNode !== undefined &&
        input.OrganizationNode !== null && {
        OrganizationNode: serializeAws_json1_1OrganizationNode(input.OrganizationNode, context),
    })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId })), (input.ShareTagOptions !== undefined &&
        input.ShareTagOptions !== null && { ShareTagOptions: input.ShareTagOptions }));
};
var serializeAws_json1_1CreateProductInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Distributor !== undefined && input.Distributor !== null && { Distributor: input.Distributor })), { IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Owner !== undefined && input.Owner !== null && { Owner: input.Owner })), (input.ProductType !== undefined && input.ProductType !== null && { ProductType: input.ProductType })), (input.ProvisioningArtifactParameters !== undefined &&
        input.ProvisioningArtifactParameters !== null && {
        ProvisioningArtifactParameters: serializeAws_json1_1ProvisioningArtifactProperties(input.ProvisioningArtifactParameters, context),
    })), (input.SupportDescription !== undefined &&
        input.SupportDescription !== null && { SupportDescription: input.SupportDescription })), (input.SupportEmail !== undefined && input.SupportEmail !== null && { SupportEmail: input.SupportEmail })), (input.SupportUrl !== undefined && input.SupportUrl !== null && { SupportUrl: input.SupportUrl })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1AddTags(input.Tags, context) }));
};
var serializeAws_json1_1CreateProvisionedProductPlanInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), { IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }), (input.NotificationArns !== undefined &&
        input.NotificationArns !== null && {
        NotificationArns: serializeAws_json1_1NotificationArns(input.NotificationArns, context),
    })), (input.PathId !== undefined && input.PathId !== null && { PathId: input.PathId })), (input.PlanName !== undefined && input.PlanName !== null && { PlanName: input.PlanName })), (input.PlanType !== undefined && input.PlanType !== null && { PlanType: input.PlanType })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId })), (input.ProvisionedProductName !== undefined &&
        input.ProvisionedProductName !== null && { ProvisionedProductName: input.ProvisionedProductName })), (input.ProvisioningArtifactId !== undefined &&
        input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId })), (input.ProvisioningParameters !== undefined &&
        input.ProvisioningParameters !== null && {
        ProvisioningParameters: serializeAws_json1_1UpdateProvisioningParameters(input.ProvisioningParameters, context),
    })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }));
};
var serializeAws_json1_1CreateProvisioningArtifactInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), { IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }), (input.Parameters !== undefined &&
        input.Parameters !== null && {
        Parameters: serializeAws_json1_1ProvisioningArtifactProperties(input.Parameters, context),
    })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }));
};
var serializeAws_json1_1CreateServiceActionInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Definition !== undefined &&
        input.Definition !== null && {
        Definition: serializeAws_json1_1ServiceActionDefinitionMap(input.Definition, context),
    })), (input.DefinitionType !== undefined &&
        input.DefinitionType !== null && { DefinitionType: input.DefinitionType })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), { IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1CreateTagOptionInput = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1DeleteConstraintInput = function (input, context) {
    return __assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Id !== undefined && input.Id !== null && { Id: input.Id }));
};
var serializeAws_json1_1DeletePortfolioInput = function (input, context) {
    return __assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Id !== undefined && input.Id !== null && { Id: input.Id }));
};
var serializeAws_json1_1DeletePortfolioShareInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.OrganizationNode !== undefined &&
        input.OrganizationNode !== null && {
        OrganizationNode: serializeAws_json1_1OrganizationNode(input.OrganizationNode, context),
    })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }));
};
var serializeAws_json1_1DeleteProductInput = function (input, context) {
    return __assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Id !== undefined && input.Id !== null && { Id: input.Id }));
};
var serializeAws_json1_1DeleteProvisionedProductPlanInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.IgnoreErrors !== undefined && input.IgnoreErrors !== null && { IgnoreErrors: input.IgnoreErrors })), (input.PlanId !== undefined && input.PlanId !== null && { PlanId: input.PlanId }));
};
var serializeAws_json1_1DeleteProvisioningArtifactInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId })), (input.ProvisioningArtifactId !== undefined &&
        input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }));
};
var serializeAws_json1_1DeleteServiceActionInput = function (input, context) {
    return __assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Id !== undefined && input.Id !== null && { Id: input.Id }));
};
var serializeAws_json1_1DeleteTagOptionInput = function (input, context) {
    return __assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id }));
};
var serializeAws_json1_1DescribeConstraintInput = function (input, context) {
    return __assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Id !== undefined && input.Id !== null && { Id: input.Id }));
};
var serializeAws_json1_1DescribeCopyProductStatusInput = function (input, context) {
    return __assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.CopyProductToken !== undefined &&
        input.CopyProductToken !== null && { CopyProductToken: input.CopyProductToken }));
};
var serializeAws_json1_1DescribePortfolioInput = function (input, context) {
    return __assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Id !== undefined && input.Id !== null && { Id: input.Id }));
};
var serializeAws_json1_1DescribePortfolioSharesInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_1DescribePortfolioShareStatusInput = function (input, context) {
    return __assign({}, (input.PortfolioShareToken !== undefined &&
        input.PortfolioShareToken !== null && { PortfolioShareToken: input.PortfolioShareToken }));
};
var serializeAws_json1_1DescribeProductAsAdminInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.SourcePortfolioId !== undefined &&
        input.SourcePortfolioId !== null && { SourcePortfolioId: input.SourcePortfolioId }));
};
var serializeAws_json1_1DescribeProductInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1DescribeProductViewInput = function (input, context) {
    return __assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Id !== undefined && input.Id !== null && { Id: input.Id }));
};
var serializeAws_json1_1DescribeProvisionedProductInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1DescribeProvisionedProductPlanInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.PlanId !== undefined && input.PlanId !== null && { PlanId: input.PlanId }));
};
var serializeAws_json1_1DescribeProvisioningArtifactInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId })), (input.ProductName !== undefined && input.ProductName !== null && { ProductName: input.ProductName })), (input.ProvisioningArtifactId !== undefined &&
        input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId })), (input.ProvisioningArtifactName !== undefined &&
        input.ProvisioningArtifactName !== null && { ProvisioningArtifactName: input.ProvisioningArtifactName })), (input.Verbose !== undefined && input.Verbose !== null && { Verbose: input.Verbose }));
};
var serializeAws_json1_1DescribeProvisioningParametersInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PathId !== undefined && input.PathId !== null && { PathId: input.PathId })), (input.PathName !== undefined && input.PathName !== null && { PathName: input.PathName })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId })), (input.ProductName !== undefined && input.ProductName !== null && { ProductName: input.ProductName })), (input.ProvisioningArtifactId !== undefined &&
        input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId })), (input.ProvisioningArtifactName !== undefined &&
        input.ProvisioningArtifactName !== null && { ProvisioningArtifactName: input.ProvisioningArtifactName }));
};
var serializeAws_json1_1DescribeRecordInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }));
};
var serializeAws_json1_1DescribeServiceActionExecutionParametersInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.ProvisionedProductId !== undefined &&
        input.ProvisionedProductId !== null && { ProvisionedProductId: input.ProvisionedProductId })), (input.ServiceActionId !== undefined &&
        input.ServiceActionId !== null && { ServiceActionId: input.ServiceActionId }));
};
var serializeAws_json1_1DescribeServiceActionInput = function (input, context) {
    return __assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Id !== undefined && input.Id !== null && { Id: input.Id }));
};
var serializeAws_json1_1DescribeTagOptionInput = function (input, context) {
    return __assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id }));
};
var serializeAws_json1_1DisableAWSOrganizationsAccessInput = function (input, context) {
    return {};
};
var serializeAws_json1_1DisassociateBudgetFromResourceInput = function (input, context) {
    return __assign(__assign({}, (input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName })), (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }));
};
var serializeAws_json1_1DisassociatePrincipalFromPortfolioInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId })), (input.PrincipalARN !== undefined && input.PrincipalARN !== null && { PrincipalARN: input.PrincipalARN }));
};
var serializeAws_json1_1DisassociateProductFromPortfolioInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }));
};
var serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId })), (input.ProvisioningArtifactId !== undefined &&
        input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId })), (input.ServiceActionId !== undefined &&
        input.ServiceActionId !== null && { ServiceActionId: input.ServiceActionId }));
};
var serializeAws_json1_1DisassociateTagOptionFromResourceInput = function (input, context) {
    return __assign(__assign({}, (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId })), (input.TagOptionId !== undefined && input.TagOptionId !== null && { TagOptionId: input.TagOptionId }));
};
var serializeAws_json1_1EnableAWSOrganizationsAccessInput = function (input, context) {
    return {};
};
var serializeAws_json1_1ExecuteProvisionedProductPlanInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), { IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }), (input.PlanId !== undefined && input.PlanId !== null && { PlanId: input.PlanId }));
};
var serializeAws_json1_1ExecuteProvisionedProductServiceActionInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), { ExecuteToken: (_a = input.ExecuteToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }), (input.Parameters !== undefined &&
        input.Parameters !== null && {
        Parameters: serializeAws_json1_1ExecutionParameterMap(input.Parameters, context),
    })), (input.ProvisionedProductId !== undefined &&
        input.ProvisionedProductId !== null && { ProvisionedProductId: input.ProvisionedProductId })), (input.ServiceActionId !== undefined &&
        input.ServiceActionId !== null && { ServiceActionId: input.ServiceActionId }));
};
var serializeAws_json1_1ExecutionParameterMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_1ExecutionParameterValueList(value, context), _b));
    }, {});
};
var serializeAws_json1_1ExecutionParameterValueList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1GetAWSOrganizationsAccessStatusInput = function (input, context) {
    return {};
};
var serializeAws_json1_1GetProvisionedProductOutputsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.OutputKeys !== undefined &&
        input.OutputKeys !== null && { OutputKeys: serializeAws_json1_1OutputKeys(input.OutputKeys, context) })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.ProvisionedProductId !== undefined &&
        input.ProvisionedProductId !== null && { ProvisionedProductId: input.ProvisionedProductId })), (input.ProvisionedProductName !== undefined &&
        input.ProvisionedProductName !== null && { ProvisionedProductName: input.ProvisionedProductName }));
};
var serializeAws_json1_1ImportAsProvisionedProductInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), { IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }), (input.PhysicalId !== undefined && input.PhysicalId !== null && { PhysicalId: input.PhysicalId })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId })), (input.ProvisionedProductName !== undefined &&
        input.ProvisionedProductName !== null && { ProvisionedProductName: input.ProvisionedProductName })), (input.ProvisioningArtifactId !== undefined &&
        input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }));
};
var serializeAws_json1_1ListAcceptedPortfolioSharesInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.PortfolioShareType !== undefined &&
        input.PortfolioShareType !== null && { PortfolioShareType: input.PortfolioShareType }));
};
var serializeAws_json1_1ListBudgetsForResourceInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }));
};
var serializeAws_json1_1ListConstraintsForPortfolioInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }));
};
var serializeAws_json1_1ListLaunchPathsInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }));
};
var serializeAws_json1_1ListOrganizationPortfolioAccessInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.OrganizationNodeType !== undefined &&
        input.OrganizationNodeType !== null && { OrganizationNodeType: input.OrganizationNodeType })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }));
};
var serializeAws_json1_1ListPortfolioAccessInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.OrganizationParentId !== undefined &&
        input.OrganizationParentId !== null && { OrganizationParentId: input.OrganizationParentId })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }));
};
var serializeAws_json1_1ListPortfoliosForProductInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }));
};
var serializeAws_json1_1ListPortfoliosInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }));
};
var serializeAws_json1_1ListPrincipalsForPortfolioInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId }));
};
var serializeAws_json1_1ListProvisionedProductPlansInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.AccessLevelFilter !== undefined &&
        input.AccessLevelFilter !== null && {
        AccessLevelFilter: serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context),
    })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.ProvisionProductId !== undefined &&
        input.ProvisionProductId !== null && { ProvisionProductId: input.ProvisionProductId }));
};
var serializeAws_json1_1ListProvisioningArtifactsForServiceActionInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.ServiceActionId !== undefined &&
        input.ServiceActionId !== null && { ServiceActionId: input.ServiceActionId }));
};
var serializeAws_json1_1ListProvisioningArtifactsInput = function (input, context) {
    return __assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }));
};
var serializeAws_json1_1ListRecordHistoryInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.AccessLevelFilter !== undefined &&
        input.AccessLevelFilter !== null && {
        AccessLevelFilter: serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context),
    })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.SearchFilter !== undefined &&
        input.SearchFilter !== null && {
        SearchFilter: serializeAws_json1_1ListRecordHistorySearchFilter(input.SearchFilter, context),
    }));
};
var serializeAws_json1_1ListRecordHistorySearchFilter = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1ListResourcesForTagOptionInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType })), (input.TagOptionId !== undefined && input.TagOptionId !== null && { TagOptionId: input.TagOptionId }));
};
var serializeAws_json1_1ListServiceActionsForProvisioningArtifactInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId })), (input.ProvisioningArtifactId !== undefined &&
        input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }));
};
var serializeAws_json1_1ListServiceActionsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }));
};
var serializeAws_json1_1ListStackInstancesForProvisionedProductInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.ProvisionedProductId !== undefined &&
        input.ProvisionedProductId !== null && { ProvisionedProductId: input.ProvisionedProductId }));
};
var serializeAws_json1_1ListTagOptionsFilters = function (input, context) {
    return __assign(__assign(__assign({}, (input.Active !== undefined && input.Active !== null && { Active: input.Active })), (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1ListTagOptionsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1ListTagOptionsFilters(input.Filters, context) })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }));
};
var serializeAws_json1_1NotificationArns = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1OrganizationNode = function (input, context) {
    return __assign(__assign({}, (input.Type !== undefined && input.Type !== null && { Type: input.Type })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1OutputKeys = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ProductViewFilters = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_1ProductViewFilterValues(value, context), _b));
    }, {});
};
var serializeAws_json1_1ProductViewFilterValues = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ProvisionedProductFilters = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_1ProvisionedProductViewFilterValues(value, context), _b));
    }, {});
};
var serializeAws_json1_1ProvisionedProductProperties = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1ProvisionedProductViewFilterValues = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ProvisioningArtifactInfo = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1ProvisioningArtifactProperties = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.DisableTemplateValidation !== undefined &&
        input.DisableTemplateValidation !== null && { DisableTemplateValidation: input.DisableTemplateValidation })), (input.Info !== undefined &&
        input.Info !== null && { Info: serializeAws_json1_1ProvisioningArtifactInfo(input.Info, context) })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_1ProvisioningParameter = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1ProvisioningParameters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ProvisioningParameter(entry, context);
    });
};
var serializeAws_json1_1ProvisioningPreferences = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.StackSetAccounts !== undefined &&
        input.StackSetAccounts !== null && {
        StackSetAccounts: serializeAws_json1_1StackSetAccounts(input.StackSetAccounts, context),
    })), (input.StackSetFailureToleranceCount !== undefined &&
        input.StackSetFailureToleranceCount !== null && {
        StackSetFailureToleranceCount: input.StackSetFailureToleranceCount,
    })), (input.StackSetFailureTolerancePercentage !== undefined &&
        input.StackSetFailureTolerancePercentage !== null && {
        StackSetFailureTolerancePercentage: input.StackSetFailureTolerancePercentage,
    })), (input.StackSetMaxConcurrencyCount !== undefined &&
        input.StackSetMaxConcurrencyCount !== null && { StackSetMaxConcurrencyCount: input.StackSetMaxConcurrencyCount })), (input.StackSetMaxConcurrencyPercentage !== undefined &&
        input.StackSetMaxConcurrencyPercentage !== null && {
        StackSetMaxConcurrencyPercentage: input.StackSetMaxConcurrencyPercentage,
    })), (input.StackSetRegions !== undefined &&
        input.StackSetRegions !== null && {
        StackSetRegions: serializeAws_json1_1StackSetRegions(input.StackSetRegions, context),
    }));
};
var serializeAws_json1_1ProvisionProductInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.NotificationArns !== undefined &&
        input.NotificationArns !== null && {
        NotificationArns: serializeAws_json1_1NotificationArns(input.NotificationArns, context),
    })), (input.PathId !== undefined && input.PathId !== null && { PathId: input.PathId })), (input.PathName !== undefined && input.PathName !== null && { PathName: input.PathName })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId })), (input.ProductName !== undefined && input.ProductName !== null && { ProductName: input.ProductName })), { ProvisionToken: (_a = input.ProvisionToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }), (input.ProvisionedProductName !== undefined &&
        input.ProvisionedProductName !== null && { ProvisionedProductName: input.ProvisionedProductName })), (input.ProvisioningArtifactId !== undefined &&
        input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId })), (input.ProvisioningArtifactName !== undefined &&
        input.ProvisioningArtifactName !== null && { ProvisioningArtifactName: input.ProvisioningArtifactName })), (input.ProvisioningParameters !== undefined &&
        input.ProvisioningParameters !== null && {
        ProvisioningParameters: serializeAws_json1_1ProvisioningParameters(input.ProvisioningParameters, context),
    })), (input.ProvisioningPreferences !== undefined &&
        input.ProvisioningPreferences !== null && {
        ProvisioningPreferences: serializeAws_json1_1ProvisioningPreferences(input.ProvisioningPreferences, context),
    })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }));
};
var serializeAws_json1_1RejectPortfolioShareInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId })), (input.PortfolioShareType !== undefined &&
        input.PortfolioShareType !== null && { PortfolioShareType: input.PortfolioShareType }));
};
var serializeAws_json1_1ScanProvisionedProductsInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.AccessLevelFilter !== undefined &&
        input.AccessLevelFilter !== null && {
        AccessLevelFilter: serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context),
    })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken }));
};
var serializeAws_json1_1SearchProductsAsAdminInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1ProductViewFilters(input.Filters, context) })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId })), (input.ProductSource !== undefined && input.ProductSource !== null && { ProductSource: input.ProductSource })), (input.SortBy !== undefined && input.SortBy !== null && { SortBy: input.SortBy })), (input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }));
};
var serializeAws_json1_1SearchProductsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1ProductViewFilters(input.Filters, context) })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.SortBy !== undefined && input.SortBy !== null && { SortBy: input.SortBy })), (input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }));
};
var serializeAws_json1_1SearchProvisionedProductsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.AccessLevelFilter !== undefined &&
        input.AccessLevelFilter !== null && {
        AccessLevelFilter: serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context),
    })), (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1ProvisionedProductFilters(input.Filters, context) })), (input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize })), (input.PageToken !== undefined && input.PageToken !== null && { PageToken: input.PageToken })), (input.SortBy !== undefined && input.SortBy !== null && { SortBy: input.SortBy })), (input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }));
};
var serializeAws_json1_1ServiceActionAssociation = function (input, context) {
    return __assign(__assign(__assign({}, (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId })), (input.ProvisioningArtifactId !== undefined &&
        input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId })), (input.ServiceActionId !== undefined &&
        input.ServiceActionId !== null && { ServiceActionId: input.ServiceActionId }));
};
var serializeAws_json1_1ServiceActionAssociations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServiceActionAssociation(entry, context);
    });
};
var serializeAws_json1_1ServiceActionDefinitionMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1SourceProvisioningArtifactProperties = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SourceProvisioningArtifactPropertiesMap(entry, context);
    });
};
var serializeAws_json1_1SourceProvisioningArtifactPropertiesMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1StackSetAccounts = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1StackSetRegions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1TagKeys = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1Tags = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1TerminateProvisionedProductInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.IgnoreErrors !== undefined && input.IgnoreErrors !== null && { IgnoreErrors: input.IgnoreErrors })), (input.ProvisionedProductId !== undefined &&
        input.ProvisionedProductId !== null && { ProvisionedProductId: input.ProvisionedProductId })), (input.ProvisionedProductName !== undefined &&
        input.ProvisionedProductName !== null && { ProvisionedProductName: input.ProvisionedProductName })), (input.RetainPhysicalResources !== undefined &&
        input.RetainPhysicalResources !== null && { RetainPhysicalResources: input.RetainPhysicalResources })), { TerminateToken: (_a = input.TerminateToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() });
};
var serializeAws_json1_1UpdateConstraintInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.Parameters !== undefined && input.Parameters !== null && { Parameters: input.Parameters }));
};
var serializeAws_json1_1UpdatePortfolioInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.AddTags !== undefined &&
        input.AddTags !== null && { AddTags: serializeAws_json1_1AddTags(input.AddTags, context) })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.ProviderName !== undefined && input.ProviderName !== null && { ProviderName: input.ProviderName })), (input.RemoveTags !== undefined &&
        input.RemoveTags !== null && { RemoveTags: serializeAws_json1_1TagKeys(input.RemoveTags, context) }));
};
var serializeAws_json1_1UpdatePortfolioShareInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.OrganizationNode !== undefined &&
        input.OrganizationNode !== null && {
        OrganizationNode: serializeAws_json1_1OrganizationNode(input.OrganizationNode, context),
    })), (input.PortfolioId !== undefined && input.PortfolioId !== null && { PortfolioId: input.PortfolioId })), (input.ShareTagOptions !== undefined &&
        input.ShareTagOptions !== null && { ShareTagOptions: input.ShareTagOptions }));
};
var serializeAws_json1_1UpdateProductInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.AddTags !== undefined &&
        input.AddTags !== null && { AddTags: serializeAws_json1_1AddTags(input.AddTags, context) })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Distributor !== undefined && input.Distributor !== null && { Distributor: input.Distributor })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Owner !== undefined && input.Owner !== null && { Owner: input.Owner })), (input.RemoveTags !== undefined &&
        input.RemoveTags !== null && { RemoveTags: serializeAws_json1_1TagKeys(input.RemoveTags, context) })), (input.SupportDescription !== undefined &&
        input.SupportDescription !== null && { SupportDescription: input.SupportDescription })), (input.SupportEmail !== undefined && input.SupportEmail !== null && { SupportEmail: input.SupportEmail })), (input.SupportUrl !== undefined && input.SupportUrl !== null && { SupportUrl: input.SupportUrl }));
};
var serializeAws_json1_1UpdateProvisionedProductInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.PathId !== undefined && input.PathId !== null && { PathId: input.PathId })), (input.PathName !== undefined && input.PathName !== null && { PathName: input.PathName })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId })), (input.ProductName !== undefined && input.ProductName !== null && { ProductName: input.ProductName })), (input.ProvisionedProductId !== undefined &&
        input.ProvisionedProductId !== null && { ProvisionedProductId: input.ProvisionedProductId })), (input.ProvisionedProductName !== undefined &&
        input.ProvisionedProductName !== null && { ProvisionedProductName: input.ProvisionedProductName })), (input.ProvisioningArtifactId !== undefined &&
        input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId })), (input.ProvisioningArtifactName !== undefined &&
        input.ProvisioningArtifactName !== null && { ProvisioningArtifactName: input.ProvisioningArtifactName })), (input.ProvisioningParameters !== undefined &&
        input.ProvisioningParameters !== null && {
        ProvisioningParameters: serializeAws_json1_1UpdateProvisioningParameters(input.ProvisioningParameters, context),
    })), (input.ProvisioningPreferences !== undefined &&
        input.ProvisioningPreferences !== null && {
        ProvisioningPreferences: serializeAws_json1_1UpdateProvisioningPreferences(input.ProvisioningPreferences, context),
    })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) })), { UpdateToken: (_a = input.UpdateToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() });
};
var serializeAws_json1_1UpdateProvisionedProductPropertiesInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), { IdempotencyToken: (_a = input.IdempotencyToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }), (input.ProvisionedProductId !== undefined &&
        input.ProvisionedProductId !== null && { ProvisionedProductId: input.ProvisionedProductId })), (input.ProvisionedProductProperties !== undefined &&
        input.ProvisionedProductProperties !== null && {
        ProvisionedProductProperties: serializeAws_json1_1ProvisionedProductProperties(input.ProvisionedProductProperties, context),
    }));
};
var serializeAws_json1_1UpdateProvisioningArtifactInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Active !== undefined && input.Active !== null && { Active: input.Active })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Guidance !== undefined && input.Guidance !== null && { Guidance: input.Guidance })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId })), (input.ProvisioningArtifactId !== undefined &&
        input.ProvisioningArtifactId !== null && { ProvisioningArtifactId: input.ProvisioningArtifactId }));
};
var serializeAws_json1_1UpdateProvisioningParameter = function (input, context) {
    return __assign(__assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.UsePreviousValue !== undefined &&
        input.UsePreviousValue !== null && { UsePreviousValue: input.UsePreviousValue })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1UpdateProvisioningParameters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1UpdateProvisioningParameter(entry, context);
    });
};
var serializeAws_json1_1UpdateProvisioningPreferences = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.StackSetAccounts !== undefined &&
        input.StackSetAccounts !== null && {
        StackSetAccounts: serializeAws_json1_1StackSetAccounts(input.StackSetAccounts, context),
    })), (input.StackSetFailureToleranceCount !== undefined &&
        input.StackSetFailureToleranceCount !== null && {
        StackSetFailureToleranceCount: input.StackSetFailureToleranceCount,
    })), (input.StackSetFailureTolerancePercentage !== undefined &&
        input.StackSetFailureTolerancePercentage !== null && {
        StackSetFailureTolerancePercentage: input.StackSetFailureTolerancePercentage,
    })), (input.StackSetMaxConcurrencyCount !== undefined &&
        input.StackSetMaxConcurrencyCount !== null && { StackSetMaxConcurrencyCount: input.StackSetMaxConcurrencyCount })), (input.StackSetMaxConcurrencyPercentage !== undefined &&
        input.StackSetMaxConcurrencyPercentage !== null && {
        StackSetMaxConcurrencyPercentage: input.StackSetMaxConcurrencyPercentage,
    })), (input.StackSetOperationType !== undefined &&
        input.StackSetOperationType !== null && { StackSetOperationType: input.StackSetOperationType })), (input.StackSetRegions !== undefined &&
        input.StackSetRegions !== null && {
        StackSetRegions: serializeAws_json1_1StackSetRegions(input.StackSetRegions, context),
    }));
};
var serializeAws_json1_1UpdateServiceActionInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AcceptLanguage !== undefined &&
        input.AcceptLanguage !== null && { AcceptLanguage: input.AcceptLanguage })), (input.Definition !== undefined &&
        input.Definition !== null && {
        Definition: serializeAws_json1_1ServiceActionDefinitionMap(input.Definition, context),
    })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1UpdateTagOptionInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.Active !== undefined && input.Active !== null && { Active: input.Active })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var deserializeAws_json1_1AcceptPortfolioShareOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1AccountIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1AllowedValues = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1AssociateBudgetWithResourceOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1AssociatePrincipalWithPortfolioOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1AssociateProductWithPortfolioOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1AssociateTagOptionWithResourceOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactOutput = function (output, context) {
    return {
        FailedServiceActionAssociations: output.FailedServiceActionAssociations !== undefined && output.FailedServiceActionAssociations !== null
            ? deserializeAws_json1_1FailedServiceActionAssociations(output.FailedServiceActionAssociations, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactOutput = function (output, context) {
    return {
        FailedServiceActionAssociations: output.FailedServiceActionAssociations !== undefined && output.FailedServiceActionAssociations !== null
            ? deserializeAws_json1_1FailedServiceActionAssociations(output.FailedServiceActionAssociations, context)
            : undefined,
    };
};
var deserializeAws_json1_1BudgetDetail = function (output, context) {
    return {
        BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
    };
};
var deserializeAws_json1_1Budgets = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BudgetDetail(entry, context);
    });
};
var deserializeAws_json1_1CloudWatchDashboard = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1CloudWatchDashboards = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CloudWatchDashboard(entry, context);
    });
};
var deserializeAws_json1_1ConstraintDetail = function (output, context) {
    return {
        ConstraintId: output.ConstraintId !== undefined && output.ConstraintId !== null ? output.ConstraintId : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        PortfolioId: output.PortfolioId !== undefined && output.PortfolioId !== null ? output.PortfolioId : undefined,
        ProductId: output.ProductId !== undefined && output.ProductId !== null ? output.ProductId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1ConstraintDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConstraintDetail(entry, context);
    });
};
var deserializeAws_json1_1ConstraintSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConstraintSummary(entry, context);
    });
};
var deserializeAws_json1_1ConstraintSummary = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1CopyProductOutput = function (output, context) {
    return {
        CopyProductToken: output.CopyProductToken !== undefined && output.CopyProductToken !== null ? output.CopyProductToken : undefined,
    };
};
var deserializeAws_json1_1CreateConstraintOutput = function (output, context) {
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
var deserializeAws_json1_1CreatePortfolioOutput = function (output, context) {
    return {
        PortfolioDetail: output.PortfolioDetail !== undefined && output.PortfolioDetail !== null
            ? deserializeAws_json1_1PortfolioDetail(output.PortfolioDetail, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
var deserializeAws_json1_1CreatePortfolioShareOutput = function (output, context) {
    return {
        PortfolioShareToken: output.PortfolioShareToken !== undefined && output.PortfolioShareToken !== null
            ? output.PortfolioShareToken
            : undefined,
    };
};
var deserializeAws_json1_1CreateProductOutput = function (output, context) {
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
var deserializeAws_json1_1CreateProvisionedProductPlanOutput = function (output, context) {
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
var deserializeAws_json1_1CreateProvisioningArtifactOutput = function (output, context) {
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
var deserializeAws_json1_1CreateServiceActionOutput = function (output, context) {
    return {
        ServiceActionDetail: output.ServiceActionDetail !== undefined && output.ServiceActionDetail !== null
            ? deserializeAws_json1_1ServiceActionDetail(output.ServiceActionDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateTagOptionOutput = function (output, context) {
    return {
        TagOptionDetail: output.TagOptionDetail !== undefined && output.TagOptionDetail !== null
            ? deserializeAws_json1_1TagOptionDetail(output.TagOptionDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteConstraintOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeletePortfolioOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeletePortfolioShareOutput = function (output, context) {
    return {
        PortfolioShareToken: output.PortfolioShareToken !== undefined && output.PortfolioShareToken !== null
            ? output.PortfolioShareToken
            : undefined,
    };
};
var deserializeAws_json1_1DeleteProductOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteProvisionedProductPlanOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteProvisioningArtifactOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteServiceActionOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteTagOptionOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DescribeConstraintOutput = function (output, context) {
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
var deserializeAws_json1_1DescribeCopyProductStatusOutput = function (output, context) {
    return {
        CopyProductStatus: output.CopyProductStatus !== undefined && output.CopyProductStatus !== null
            ? output.CopyProductStatus
            : undefined,
        StatusDetail: output.StatusDetail !== undefined && output.StatusDetail !== null ? output.StatusDetail : undefined,
        TargetProductId: output.TargetProductId !== undefined && output.TargetProductId !== null ? output.TargetProductId : undefined,
    };
};
var deserializeAws_json1_1DescribePortfolioOutput = function (output, context) {
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
var deserializeAws_json1_1DescribePortfolioSharesOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        PortfolioShareDetails: output.PortfolioShareDetails !== undefined && output.PortfolioShareDetails !== null
            ? deserializeAws_json1_1PortfolioShareDetails(output.PortfolioShareDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribePortfolioShareStatusOutput = function (output, context) {
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
var deserializeAws_json1_1DescribeProductAsAdminOutput = function (output, context) {
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
var deserializeAws_json1_1DescribeProductOutput = function (output, context) {
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
var deserializeAws_json1_1DescribeProductViewOutput = function (output, context) {
    return {
        ProductViewSummary: output.ProductViewSummary !== undefined && output.ProductViewSummary !== null
            ? deserializeAws_json1_1ProductViewSummary(output.ProductViewSummary, context)
            : undefined,
        ProvisioningArtifacts: output.ProvisioningArtifacts !== undefined && output.ProvisioningArtifacts !== null
            ? deserializeAws_json1_1ProvisioningArtifacts(output.ProvisioningArtifacts, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeProvisionedProductOutput = function (output, context) {
    return {
        CloudWatchDashboards: output.CloudWatchDashboards !== undefined && output.CloudWatchDashboards !== null
            ? deserializeAws_json1_1CloudWatchDashboards(output.CloudWatchDashboards, context)
            : undefined,
        ProvisionedProductDetail: output.ProvisionedProductDetail !== undefined && output.ProvisionedProductDetail !== null
            ? deserializeAws_json1_1ProvisionedProductDetail(output.ProvisionedProductDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeProvisionedProductPlanOutput = function (output, context) {
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
var deserializeAws_json1_1DescribeProvisioningArtifactOutput = function (output, context) {
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
var deserializeAws_json1_1DescribeProvisioningParametersOutput = function (output, context) {
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
var deserializeAws_json1_1DescribeRecordOutput = function (output, context) {
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
var deserializeAws_json1_1DescribeServiceActionExecutionParametersOutput = function (output, context) {
    return {
        ServiceActionParameters: output.ServiceActionParameters !== undefined && output.ServiceActionParameters !== null
            ? deserializeAws_json1_1ExecutionParameters(output.ServiceActionParameters, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeServiceActionOutput = function (output, context) {
    return {
        ServiceActionDetail: output.ServiceActionDetail !== undefined && output.ServiceActionDetail !== null
            ? deserializeAws_json1_1ServiceActionDetail(output.ServiceActionDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeTagOptionOutput = function (output, context) {
    return {
        TagOptionDetail: output.TagOptionDetail !== undefined && output.TagOptionDetail !== null
            ? deserializeAws_json1_1TagOptionDetail(output.TagOptionDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1DisableAWSOrganizationsAccessOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DisassociateBudgetFromResourceOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DisassociatePrincipalFromPortfolioOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DisassociateProductFromPortfolioOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DisassociateTagOptionFromResourceOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DuplicateResourceException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1EnableAWSOrganizationsAccessOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1ExecuteProvisionedProductPlanOutput = function (output, context) {
    return {
        RecordDetail: output.RecordDetail !== undefined && output.RecordDetail !== null
            ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1ExecuteProvisionedProductServiceActionOutput = function (output, context) {
    return {
        RecordDetail: output.RecordDetail !== undefined && output.RecordDetail !== null
            ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1ExecutionParameter = function (output, context) {
    return {
        DefaultValues: output.DefaultValues !== undefined && output.DefaultValues !== null
            ? deserializeAws_json1_1ExecutionParameterValueList(output.DefaultValues, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1ExecutionParameters = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ExecutionParameter(entry, context);
    });
};
var deserializeAws_json1_1ExecutionParameterValueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1FailedServiceActionAssociation = function (output, context) {
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
var deserializeAws_json1_1FailedServiceActionAssociations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedServiceActionAssociation(entry, context);
    });
};
var deserializeAws_json1_1GetAWSOrganizationsAccessStatusOutput = function (output, context) {
    return {
        AccessStatus: output.AccessStatus !== undefined && output.AccessStatus !== null ? output.AccessStatus : undefined,
    };
};
var deserializeAws_json1_1GetProvisionedProductOutputsOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        Outputs: output.Outputs !== undefined && output.Outputs !== null
            ? deserializeAws_json1_1RecordOutputs(output.Outputs, context)
            : undefined,
    };
};
var deserializeAws_json1_1ImportAsProvisionedProductOutput = function (output, context) {
    return {
        RecordDetail: output.RecordDetail !== undefined && output.RecordDetail !== null
            ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1InvalidParametersException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidStateException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1LaunchPath = function (output, context) {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1LaunchPaths = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LaunchPath(entry, context);
    });
};
var deserializeAws_json1_1LaunchPathSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LaunchPathSummary(entry, context);
    });
};
var deserializeAws_json1_1LaunchPathSummary = function (output, context) {
    return {
        ConstraintSummaries: output.ConstraintSummaries !== undefined && output.ConstraintSummaries !== null
            ? deserializeAws_json1_1ConstraintSummaries(output.ConstraintSummaries, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ListAcceptedPortfolioSharesOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        PortfolioDetails: output.PortfolioDetails !== undefined && output.PortfolioDetails !== null
            ? deserializeAws_json1_1PortfolioDetails(output.PortfolioDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListBudgetsForResourceOutput = function (output, context) {
    return {
        Budgets: output.Budgets !== undefined && output.Budgets !== null
            ? deserializeAws_json1_1Budgets(output.Budgets, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    };
};
var deserializeAws_json1_1ListConstraintsForPortfolioOutput = function (output, context) {
    return {
        ConstraintDetails: output.ConstraintDetails !== undefined && output.ConstraintDetails !== null
            ? deserializeAws_json1_1ConstraintDetails(output.ConstraintDetails, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    };
};
var deserializeAws_json1_1ListLaunchPathsOutput = function (output, context) {
    return {
        LaunchPathSummaries: output.LaunchPathSummaries !== undefined && output.LaunchPathSummaries !== null
            ? deserializeAws_json1_1LaunchPathSummaries(output.LaunchPathSummaries, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    };
};
var deserializeAws_json1_1ListOrganizationPortfolioAccessOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        OrganizationNodes: output.OrganizationNodes !== undefined && output.OrganizationNodes !== null
            ? deserializeAws_json1_1OrganizationNodes(output.OrganizationNodes, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListPortfolioAccessOutput = function (output, context) {
    return {
        AccountIds: output.AccountIds !== undefined && output.AccountIds !== null
            ? deserializeAws_json1_1AccountIds(output.AccountIds, context)
            : undefined,
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    };
};
var deserializeAws_json1_1ListPortfoliosForProductOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        PortfolioDetails: output.PortfolioDetails !== undefined && output.PortfolioDetails !== null
            ? deserializeAws_json1_1PortfolioDetails(output.PortfolioDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListPortfoliosOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        PortfolioDetails: output.PortfolioDetails !== undefined && output.PortfolioDetails !== null
            ? deserializeAws_json1_1PortfolioDetails(output.PortfolioDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListPrincipalsForPortfolioOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        Principals: output.Principals !== undefined && output.Principals !== null
            ? deserializeAws_json1_1Principals(output.Principals, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListProvisionedProductPlansOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ProvisionedProductPlans: output.ProvisionedProductPlans !== undefined && output.ProvisionedProductPlans !== null
            ? deserializeAws_json1_1ProvisionedProductPlans(output.ProvisionedProductPlans, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListProvisioningArtifactsForServiceActionOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ProvisioningArtifactViews: output.ProvisioningArtifactViews !== undefined && output.ProvisioningArtifactViews !== null
            ? deserializeAws_json1_1ProvisioningArtifactViews(output.ProvisioningArtifactViews, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListProvisioningArtifactsOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ProvisioningArtifactDetails: output.ProvisioningArtifactDetails !== undefined && output.ProvisioningArtifactDetails !== null
            ? deserializeAws_json1_1ProvisioningArtifactDetails(output.ProvisioningArtifactDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListRecordHistoryOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        RecordDetails: output.RecordDetails !== undefined && output.RecordDetails !== null
            ? deserializeAws_json1_1RecordDetails(output.RecordDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListResourcesForTagOptionOutput = function (output, context) {
    return {
        PageToken: output.PageToken !== undefined && output.PageToken !== null ? output.PageToken : undefined,
        ResourceDetails: output.ResourceDetails !== undefined && output.ResourceDetails !== null
            ? deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListServiceActionsForProvisioningArtifactOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ServiceActionSummaries: output.ServiceActionSummaries !== undefined && output.ServiceActionSummaries !== null
            ? deserializeAws_json1_1ServiceActionSummaries(output.ServiceActionSummaries, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListServiceActionsOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ServiceActionSummaries: output.ServiceActionSummaries !== undefined && output.ServiceActionSummaries !== null
            ? deserializeAws_json1_1ServiceActionSummaries(output.ServiceActionSummaries, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListStackInstancesForProvisionedProductOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        StackInstances: output.StackInstances !== undefined && output.StackInstances !== null
            ? deserializeAws_json1_1StackInstances(output.StackInstances, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListTagOptionsOutput = function (output, context) {
    return {
        PageToken: output.PageToken !== undefined && output.PageToken !== null ? output.PageToken : undefined,
        TagOptionDetails: output.TagOptionDetails !== undefined && output.TagOptionDetails !== null
            ? deserializeAws_json1_1TagOptionDetails(output.TagOptionDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1Namespaces = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1NotificationArns = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1OperationNotSupportedException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1OrganizationNode = function (output, context) {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1OrganizationNodes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationNode(entry, context);
    });
};
var deserializeAws_json1_1ParameterConstraints = function (output, context) {
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
var deserializeAws_json1_1PortfolioDetail = function (output, context) {
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
var deserializeAws_json1_1PortfolioDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PortfolioDetail(entry, context);
    });
};
var deserializeAws_json1_1PortfolioShareDetail = function (output, context) {
    return {
        Accepted: output.Accepted !== undefined && output.Accepted !== null ? output.Accepted : undefined,
        PrincipalId: output.PrincipalId !== undefined && output.PrincipalId !== null ? output.PrincipalId : undefined,
        ShareTagOptions: output.ShareTagOptions !== undefined && output.ShareTagOptions !== null ? output.ShareTagOptions : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1PortfolioShareDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PortfolioShareDetail(entry, context);
    });
};
var deserializeAws_json1_1Principal = function (output, context) {
    return {
        PrincipalARN: output.PrincipalARN !== undefined && output.PrincipalARN !== null ? output.PrincipalARN : undefined,
        PrincipalType: output.PrincipalType !== undefined && output.PrincipalType !== null ? output.PrincipalType : undefined,
    };
};
var deserializeAws_json1_1Principals = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Principal(entry, context);
    });
};
var deserializeAws_json1_1ProductViewAggregations = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_1ProductViewAggregationValues(value, context), _b));
    }, {});
};
var deserializeAws_json1_1ProductViewAggregationValue = function (output, context) {
    return {
        ApproximateCount: output.ApproximateCount !== undefined && output.ApproximateCount !== null ? output.ApproximateCount : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1ProductViewAggregationValues = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProductViewAggregationValue(entry, context);
    });
};
var deserializeAws_json1_1ProductViewDetail = function (output, context) {
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
var deserializeAws_json1_1ProductViewDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProductViewDetail(entry, context);
    });
};
var deserializeAws_json1_1ProductViewSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProductViewSummary(entry, context);
    });
};
var deserializeAws_json1_1ProductViewSummary = function (output, context) {
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
var deserializeAws_json1_1ProvisionedProductAttribute = function (output, context) {
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
var deserializeAws_json1_1ProvisionedProductAttributes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisionedProductAttribute(entry, context);
    });
};
var deserializeAws_json1_1ProvisionedProductDetail = function (output, context) {
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
var deserializeAws_json1_1ProvisionedProductDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisionedProductDetail(entry, context);
    });
};
var deserializeAws_json1_1ProvisionedProductPlanDetails = function (output, context) {
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
var deserializeAws_json1_1ProvisionedProductPlans = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisionedProductPlanSummary(entry, context);
    });
};
var deserializeAws_json1_1ProvisionedProductPlanSummary = function (output, context) {
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
var deserializeAws_json1_1ProvisionedProductProperties = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1ProvisioningArtifact = function (output, context) {
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
var deserializeAws_json1_1ProvisioningArtifactDetail = function (output, context) {
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
var deserializeAws_json1_1ProvisioningArtifactDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisioningArtifactDetail(entry, context);
    });
};
var deserializeAws_json1_1ProvisioningArtifactInfo = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1ProvisioningArtifactOutput = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    };
};
var deserializeAws_json1_1ProvisioningArtifactOutputs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisioningArtifactOutput(entry, context);
    });
};
var deserializeAws_json1_1ProvisioningArtifactParameter = function (output, context) {
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
var deserializeAws_json1_1ProvisioningArtifactParameters = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisioningArtifactParameter(entry, context);
    });
};
var deserializeAws_json1_1ProvisioningArtifactPreferences = function (output, context) {
    return {
        StackSetAccounts: output.StackSetAccounts !== undefined && output.StackSetAccounts !== null
            ? deserializeAws_json1_1StackSetAccounts(output.StackSetAccounts, context)
            : undefined,
        StackSetRegions: output.StackSetRegions !== undefined && output.StackSetRegions !== null
            ? deserializeAws_json1_1StackSetRegions(output.StackSetRegions, context)
            : undefined,
    };
};
var deserializeAws_json1_1ProvisioningArtifacts = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisioningArtifact(entry, context);
    });
};
var deserializeAws_json1_1ProvisioningArtifactSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisioningArtifactSummary(entry, context);
    });
};
var deserializeAws_json1_1ProvisioningArtifactSummary = function (output, context) {
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
var deserializeAws_json1_1ProvisioningArtifactView = function (output, context) {
    return {
        ProductViewSummary: output.ProductViewSummary !== undefined && output.ProductViewSummary !== null
            ? deserializeAws_json1_1ProductViewSummary(output.ProductViewSummary, context)
            : undefined,
        ProvisioningArtifact: output.ProvisioningArtifact !== undefined && output.ProvisioningArtifact !== null
            ? deserializeAws_json1_1ProvisioningArtifact(output.ProvisioningArtifact, context)
            : undefined,
    };
};
var deserializeAws_json1_1ProvisioningArtifactViews = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProvisioningArtifactView(entry, context);
    });
};
var deserializeAws_json1_1ProvisionProductOutput = function (output, context) {
    return {
        RecordDetail: output.RecordDetail !== undefined && output.RecordDetail !== null
            ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1RecordDetail = function (output, context) {
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
var deserializeAws_json1_1RecordDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RecordDetail(entry, context);
    });
};
var deserializeAws_json1_1RecordError = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    };
};
var deserializeAws_json1_1RecordErrors = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RecordError(entry, context);
    });
};
var deserializeAws_json1_1RecordOutput = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        OutputKey: output.OutputKey !== undefined && output.OutputKey !== null ? output.OutputKey : undefined,
        OutputValue: output.OutputValue !== undefined && output.OutputValue !== null ? output.OutputValue : undefined,
    };
};
var deserializeAws_json1_1RecordOutputs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RecordOutput(entry, context);
    });
};
var deserializeAws_json1_1RecordTag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1RecordTags = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RecordTag(entry, context);
    });
};
var deserializeAws_json1_1RejectPortfolioShareOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1ResourceChange = function (output, context) {
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
var deserializeAws_json1_1ResourceChangeDetail = function (output, context) {
    return {
        CausingEntity: output.CausingEntity !== undefined && output.CausingEntity !== null ? output.CausingEntity : undefined,
        Evaluation: output.Evaluation !== undefined && output.Evaluation !== null ? output.Evaluation : undefined,
        Target: output.Target !== undefined && output.Target !== null
            ? deserializeAws_json1_1ResourceTargetDefinition(output.Target, context)
            : undefined,
    };
};
var deserializeAws_json1_1ResourceChangeDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceChangeDetail(entry, context);
    });
};
var deserializeAws_json1_1ResourceChanges = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceChange(entry, context);
    });
};
var deserializeAws_json1_1ResourceDetail = function (output, context) {
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
var deserializeAws_json1_1ResourceDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceDetail(entry, context);
    });
};
var deserializeAws_json1_1ResourceInUseException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ResourceTargetDefinition = function (output, context) {
    return {
        Attribute: output.Attribute !== undefined && output.Attribute !== null ? output.Attribute : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RequiresRecreation: output.RequiresRecreation !== undefined && output.RequiresRecreation !== null
            ? output.RequiresRecreation
            : undefined,
    };
};
var deserializeAws_json1_1ScanProvisionedProductsOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ProvisionedProducts: output.ProvisionedProducts !== undefined && output.ProvisionedProducts !== null
            ? deserializeAws_json1_1ProvisionedProductDetails(output.ProvisionedProducts, context)
            : undefined,
    };
};
var deserializeAws_json1_1Scope = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1SearchProductsAsAdminOutput = function (output, context) {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        ProductViewDetails: output.ProductViewDetails !== undefined && output.ProductViewDetails !== null
            ? deserializeAws_json1_1ProductViewDetails(output.ProductViewDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_1SearchProductsOutput = function (output, context) {
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
var deserializeAws_json1_1SearchProvisionedProductsOutput = function (output, context) {
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
var deserializeAws_json1_1ServiceActionDefinitionMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1ServiceActionDetail = function (output, context) {
    return {
        Definition: output.Definition !== undefined && output.Definition !== null
            ? deserializeAws_json1_1ServiceActionDefinitionMap(output.Definition, context)
            : undefined,
        ServiceActionSummary: output.ServiceActionSummary !== undefined && output.ServiceActionSummary !== null
            ? deserializeAws_json1_1ServiceActionSummary(output.ServiceActionSummary, context)
            : undefined,
    };
};
var deserializeAws_json1_1ServiceActionSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServiceActionSummary(entry, context);
    });
};
var deserializeAws_json1_1ServiceActionSummary = function (output, context) {
    return {
        DefinitionType: output.DefinitionType !== undefined && output.DefinitionType !== null ? output.DefinitionType : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1ShareDetails = function (output, context) {
    return {
        ShareErrors: output.ShareErrors !== undefined && output.ShareErrors !== null
            ? deserializeAws_json1_1ShareErrors(output.ShareErrors, context)
            : undefined,
        SuccessfulShares: output.SuccessfulShares !== undefined && output.SuccessfulShares !== null
            ? deserializeAws_json1_1SuccessfulShares(output.SuccessfulShares, context)
            : undefined,
    };
};
var deserializeAws_json1_1ShareError = function (output, context) {
    return {
        Accounts: output.Accounts !== undefined && output.Accounts !== null
            ? deserializeAws_json1_1Namespaces(output.Accounts, context)
            : undefined,
        Error: output.Error !== undefined && output.Error !== null ? output.Error : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ShareErrors = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ShareError(entry, context);
    });
};
var deserializeAws_json1_1StackInstance = function (output, context) {
    return {
        Account: output.Account !== undefined && output.Account !== null ? output.Account : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        StackInstanceStatus: output.StackInstanceStatus !== undefined && output.StackInstanceStatus !== null
            ? output.StackInstanceStatus
            : undefined,
    };
};
var deserializeAws_json1_1StackInstances = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StackInstance(entry, context);
    });
};
var deserializeAws_json1_1StackSetAccounts = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1StackSetRegions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1SuccessfulShares = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1Tag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1TagOptionDetail = function (output, context) {
    return {
        Active: output.Active !== undefined && output.Active !== null ? output.Active : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1TagOptionDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TagOptionDetail(entry, context);
    });
};
var deserializeAws_json1_1TagOptionNotMigratedException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1TagOptionSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TagOptionSummary(entry, context);
    });
};
var deserializeAws_json1_1TagOptionSummary = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1TagOptionValues(output.Values, context)
            : undefined,
    };
};
var deserializeAws_json1_1TagOptionValues = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1Tags = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
var deserializeAws_json1_1TerminateProvisionedProductOutput = function (output, context) {
    return {
        RecordDetail: output.RecordDetail !== undefined && output.RecordDetail !== null
            ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateConstraintOutput = function (output, context) {
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
var deserializeAws_json1_1UpdatePortfolioOutput = function (output, context) {
    return {
        PortfolioDetail: output.PortfolioDetail !== undefined && output.PortfolioDetail !== null
            ? deserializeAws_json1_1PortfolioDetail(output.PortfolioDetail, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
var deserializeAws_json1_1UpdatePortfolioShareOutput = function (output, context) {
    return {
        PortfolioShareToken: output.PortfolioShareToken !== undefined && output.PortfolioShareToken !== null
            ? output.PortfolioShareToken
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_1UpdateProductOutput = function (output, context) {
    return {
        ProductViewDetail: output.ProductViewDetail !== undefined && output.ProductViewDetail !== null
            ? deserializeAws_json1_1ProductViewDetail(output.ProductViewDetail, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
var deserializeAws_json1_1UpdateProvisionedProductOutput = function (output, context) {
    return {
        RecordDetail: output.RecordDetail !== undefined && output.RecordDetail !== null
            ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateProvisionedProductPropertiesOutput = function (output, context) {
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
var deserializeAws_json1_1UpdateProvisioningArtifactOutput = function (output, context) {
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
var deserializeAws_json1_1UpdateProvisioningParameter = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        UsePreviousValue: output.UsePreviousValue !== undefined && output.UsePreviousValue !== null ? output.UsePreviousValue : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1UpdateProvisioningParameters = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UpdateProvisioningParameter(entry, context);
    });
};
var deserializeAws_json1_1UpdateServiceActionOutput = function (output, context) {
    return {
        ServiceActionDetail: output.ServiceActionDetail !== undefined && output.ServiceActionDetail !== null
            ? deserializeAws_json1_1ServiceActionDetail(output.ServiceActionDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateTagOptionOutput = function (output, context) {
    return {
        TagOptionDetail: output.TagOptionDetail !== undefined && output.TagOptionDetail !== null
            ? deserializeAws_json1_1TagOptionDetail(output.TagOptionDetail, context)
            : undefined,
    };
};
var deserializeAws_json1_1UsageInstruction = function (output, context) {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1UsageInstructions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UsageInstruction(entry, context);
    });
};
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var buildHttpRpcRequest = function (context, headers, path, resolvedHostname, body) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, contents;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                contents = {
                    protocol: protocol,
                    hostname: hostname,
                    port: port,
                    method: "POST",
                    path: path,
                    headers: headers,
                };
                if (resolvedHostname !== undefined) {
                    contents.hostname = resolvedHostname;
                }
                if (body !== undefined) {
                    contents.body = body;
                }
                return [2 /*return*/, new __HttpRequest(contents)];
        }
    });
}); };
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    var headerKey = findKey(output.headers, "x-amzn-errortype");
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