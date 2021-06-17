import { __extends } from "tslib";
import { ServiceCatalogClient } from "./ServiceCatalogClient";
import { AcceptPortfolioShareCommand, } from "./commands/AcceptPortfolioShareCommand";
import { AssociateBudgetWithResourceCommand, } from "./commands/AssociateBudgetWithResourceCommand";
import { AssociatePrincipalWithPortfolioCommand, } from "./commands/AssociatePrincipalWithPortfolioCommand";
import { AssociateProductWithPortfolioCommand, } from "./commands/AssociateProductWithPortfolioCommand";
import { AssociateServiceActionWithProvisioningArtifactCommand, } from "./commands/AssociateServiceActionWithProvisioningArtifactCommand";
import { AssociateTagOptionWithResourceCommand, } from "./commands/AssociateTagOptionWithResourceCommand";
import { BatchAssociateServiceActionWithProvisioningArtifactCommand, } from "./commands/BatchAssociateServiceActionWithProvisioningArtifactCommand";
import { BatchDisassociateServiceActionFromProvisioningArtifactCommand, } from "./commands/BatchDisassociateServiceActionFromProvisioningArtifactCommand";
import { CopyProductCommand } from "./commands/CopyProductCommand";
import { CreateConstraintCommand, } from "./commands/CreateConstraintCommand";
import { CreatePortfolioCommand, } from "./commands/CreatePortfolioCommand";
import { CreatePortfolioShareCommand, } from "./commands/CreatePortfolioShareCommand";
import { CreateProductCommand, } from "./commands/CreateProductCommand";
import { CreateProvisionedProductPlanCommand, } from "./commands/CreateProvisionedProductPlanCommand";
import { CreateProvisioningArtifactCommand, } from "./commands/CreateProvisioningArtifactCommand";
import { CreateServiceActionCommand, } from "./commands/CreateServiceActionCommand";
import { CreateTagOptionCommand, } from "./commands/CreateTagOptionCommand";
import { DeleteConstraintCommand, } from "./commands/DeleteConstraintCommand";
import { DeletePortfolioCommand, } from "./commands/DeletePortfolioCommand";
import { DeletePortfolioShareCommand, } from "./commands/DeletePortfolioShareCommand";
import { DeleteProductCommand, } from "./commands/DeleteProductCommand";
import { DeleteProvisionedProductPlanCommand, } from "./commands/DeleteProvisionedProductPlanCommand";
import { DeleteProvisioningArtifactCommand, } from "./commands/DeleteProvisioningArtifactCommand";
import { DeleteServiceActionCommand, } from "./commands/DeleteServiceActionCommand";
import { DeleteTagOptionCommand, } from "./commands/DeleteTagOptionCommand";
import { DescribeConstraintCommand, } from "./commands/DescribeConstraintCommand";
import { DescribeCopyProductStatusCommand, } from "./commands/DescribeCopyProductStatusCommand";
import { DescribePortfolioCommand, } from "./commands/DescribePortfolioCommand";
import { DescribePortfolioShareStatusCommand, } from "./commands/DescribePortfolioShareStatusCommand";
import { DescribePortfolioSharesCommand, } from "./commands/DescribePortfolioSharesCommand";
import { DescribeProductAsAdminCommand, } from "./commands/DescribeProductAsAdminCommand";
import { DescribeProductCommand, } from "./commands/DescribeProductCommand";
import { DescribeProductViewCommand, } from "./commands/DescribeProductViewCommand";
import { DescribeProvisionedProductCommand, } from "./commands/DescribeProvisionedProductCommand";
import { DescribeProvisionedProductPlanCommand, } from "./commands/DescribeProvisionedProductPlanCommand";
import { DescribeProvisioningArtifactCommand, } from "./commands/DescribeProvisioningArtifactCommand";
import { DescribeProvisioningParametersCommand, } from "./commands/DescribeProvisioningParametersCommand";
import { DescribeRecordCommand, } from "./commands/DescribeRecordCommand";
import { DescribeServiceActionCommand, } from "./commands/DescribeServiceActionCommand";
import { DescribeServiceActionExecutionParametersCommand, } from "./commands/DescribeServiceActionExecutionParametersCommand";
import { DescribeTagOptionCommand, } from "./commands/DescribeTagOptionCommand";
import { DisableAWSOrganizationsAccessCommand, } from "./commands/DisableAWSOrganizationsAccessCommand";
import { DisassociateBudgetFromResourceCommand, } from "./commands/DisassociateBudgetFromResourceCommand";
import { DisassociatePrincipalFromPortfolioCommand, } from "./commands/DisassociatePrincipalFromPortfolioCommand";
import { DisassociateProductFromPortfolioCommand, } from "./commands/DisassociateProductFromPortfolioCommand";
import { DisassociateServiceActionFromProvisioningArtifactCommand, } from "./commands/DisassociateServiceActionFromProvisioningArtifactCommand";
import { DisassociateTagOptionFromResourceCommand, } from "./commands/DisassociateTagOptionFromResourceCommand";
import { EnableAWSOrganizationsAccessCommand, } from "./commands/EnableAWSOrganizationsAccessCommand";
import { ExecuteProvisionedProductPlanCommand, } from "./commands/ExecuteProvisionedProductPlanCommand";
import { ExecuteProvisionedProductServiceActionCommand, } from "./commands/ExecuteProvisionedProductServiceActionCommand";
import { GetAWSOrganizationsAccessStatusCommand, } from "./commands/GetAWSOrganizationsAccessStatusCommand";
import { GetProvisionedProductOutputsCommand, } from "./commands/GetProvisionedProductOutputsCommand";
import { ImportAsProvisionedProductCommand, } from "./commands/ImportAsProvisionedProductCommand";
import { ListAcceptedPortfolioSharesCommand, } from "./commands/ListAcceptedPortfolioSharesCommand";
import { ListBudgetsForResourceCommand, } from "./commands/ListBudgetsForResourceCommand";
import { ListConstraintsForPortfolioCommand, } from "./commands/ListConstraintsForPortfolioCommand";
import { ListLaunchPathsCommand, } from "./commands/ListLaunchPathsCommand";
import { ListOrganizationPortfolioAccessCommand, } from "./commands/ListOrganizationPortfolioAccessCommand";
import { ListPortfolioAccessCommand, } from "./commands/ListPortfolioAccessCommand";
import { ListPortfoliosCommand, } from "./commands/ListPortfoliosCommand";
import { ListPortfoliosForProductCommand, } from "./commands/ListPortfoliosForProductCommand";
import { ListPrincipalsForPortfolioCommand, } from "./commands/ListPrincipalsForPortfolioCommand";
import { ListProvisionedProductPlansCommand, } from "./commands/ListProvisionedProductPlansCommand";
import { ListProvisioningArtifactsCommand, } from "./commands/ListProvisioningArtifactsCommand";
import { ListProvisioningArtifactsForServiceActionCommand, } from "./commands/ListProvisioningArtifactsForServiceActionCommand";
import { ListRecordHistoryCommand, } from "./commands/ListRecordHistoryCommand";
import { ListResourcesForTagOptionCommand, } from "./commands/ListResourcesForTagOptionCommand";
import { ListServiceActionsCommand, } from "./commands/ListServiceActionsCommand";
import { ListServiceActionsForProvisioningArtifactCommand, } from "./commands/ListServiceActionsForProvisioningArtifactCommand";
import { ListStackInstancesForProvisionedProductCommand, } from "./commands/ListStackInstancesForProvisionedProductCommand";
import { ListTagOptionsCommand, } from "./commands/ListTagOptionsCommand";
import { ProvisionProductCommand, } from "./commands/ProvisionProductCommand";
import { RejectPortfolioShareCommand, } from "./commands/RejectPortfolioShareCommand";
import { ScanProvisionedProductsCommand, } from "./commands/ScanProvisionedProductsCommand";
import { SearchProductsAsAdminCommand, } from "./commands/SearchProductsAsAdminCommand";
import { SearchProductsCommand, } from "./commands/SearchProductsCommand";
import { SearchProvisionedProductsCommand, } from "./commands/SearchProvisionedProductsCommand";
import { TerminateProvisionedProductCommand, } from "./commands/TerminateProvisionedProductCommand";
import { UpdateConstraintCommand, } from "./commands/UpdateConstraintCommand";
import { UpdatePortfolioCommand, } from "./commands/UpdatePortfolioCommand";
import { UpdatePortfolioShareCommand, } from "./commands/UpdatePortfolioShareCommand";
import { UpdateProductCommand, } from "./commands/UpdateProductCommand";
import { UpdateProvisionedProductCommand, } from "./commands/UpdateProvisionedProductCommand";
import { UpdateProvisionedProductPropertiesCommand, } from "./commands/UpdateProvisionedProductPropertiesCommand";
import { UpdateProvisioningArtifactCommand, } from "./commands/UpdateProvisioningArtifactCommand";
import { UpdateServiceActionCommand, } from "./commands/UpdateServiceActionCommand";
import { UpdateTagOptionCommand, } from "./commands/UpdateTagOptionCommand";
/**
 * <fullname>AWS Service Catalog</fullname>
 *          <p>
 *             <a href="https://aws.amazon.com/servicecatalog/">AWS Service Catalog</a> enables
 *          organizations to create and manage catalogs of IT services that are approved for AWS. To
 *          get the most out of this documentation, you should be familiar with the terminology
 *          discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">AWS Service Catalog
 *          Concepts</a>.</p>
 */
var ServiceCatalog = /** @class */ (function (_super) {
    __extends(ServiceCatalog, _super);
    function ServiceCatalog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceCatalog.prototype.acceptPortfolioShare = function (args, optionsOrCb, cb) {
        var command = new AcceptPortfolioShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.associateBudgetWithResource = function (args, optionsOrCb, cb) {
        var command = new AssociateBudgetWithResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.associatePrincipalWithPortfolio = function (args, optionsOrCb, cb) {
        var command = new AssociatePrincipalWithPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.associateProductWithPortfolio = function (args, optionsOrCb, cb) {
        var command = new AssociateProductWithPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.associateServiceActionWithProvisioningArtifact = function (args, optionsOrCb, cb) {
        var command = new AssociateServiceActionWithProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.associateTagOptionWithResource = function (args, optionsOrCb, cb) {
        var command = new AssociateTagOptionWithResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.batchAssociateServiceActionWithProvisioningArtifact = function (args, optionsOrCb, cb) {
        var command = new BatchAssociateServiceActionWithProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.batchDisassociateServiceActionFromProvisioningArtifact = function (args, optionsOrCb, cb) {
        var command = new BatchDisassociateServiceActionFromProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.copyProduct = function (args, optionsOrCb, cb) {
        var command = new CopyProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.createConstraint = function (args, optionsOrCb, cb) {
        var command = new CreateConstraintCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.createPortfolio = function (args, optionsOrCb, cb) {
        var command = new CreatePortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.createPortfolioShare = function (args, optionsOrCb, cb) {
        var command = new CreatePortfolioShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.createProduct = function (args, optionsOrCb, cb) {
        var command = new CreateProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.createProvisionedProductPlan = function (args, optionsOrCb, cb) {
        var command = new CreateProvisionedProductPlanCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.createProvisioningArtifact = function (args, optionsOrCb, cb) {
        var command = new CreateProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.createServiceAction = function (args, optionsOrCb, cb) {
        var command = new CreateServiceActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.createTagOption = function (args, optionsOrCb, cb) {
        var command = new CreateTagOptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.deleteConstraint = function (args, optionsOrCb, cb) {
        var command = new DeleteConstraintCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.deletePortfolio = function (args, optionsOrCb, cb) {
        var command = new DeletePortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.deletePortfolioShare = function (args, optionsOrCb, cb) {
        var command = new DeletePortfolioShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.deleteProduct = function (args, optionsOrCb, cb) {
        var command = new DeleteProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.deleteProvisionedProductPlan = function (args, optionsOrCb, cb) {
        var command = new DeleteProvisionedProductPlanCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.deleteProvisioningArtifact = function (args, optionsOrCb, cb) {
        var command = new DeleteProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.deleteServiceAction = function (args, optionsOrCb, cb) {
        var command = new DeleteServiceActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.deleteTagOption = function (args, optionsOrCb, cb) {
        var command = new DeleteTagOptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describeConstraint = function (args, optionsOrCb, cb) {
        var command = new DescribeConstraintCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describeCopyProductStatus = function (args, optionsOrCb, cb) {
        var command = new DescribeCopyProductStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describePortfolio = function (args, optionsOrCb, cb) {
        var command = new DescribePortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describePortfolioShares = function (args, optionsOrCb, cb) {
        var command = new DescribePortfolioSharesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describePortfolioShareStatus = function (args, optionsOrCb, cb) {
        var command = new DescribePortfolioShareStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describeProduct = function (args, optionsOrCb, cb) {
        var command = new DescribeProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describeProductAsAdmin = function (args, optionsOrCb, cb) {
        var command = new DescribeProductAsAdminCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describeProductView = function (args, optionsOrCb, cb) {
        var command = new DescribeProductViewCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describeProvisionedProduct = function (args, optionsOrCb, cb) {
        var command = new DescribeProvisionedProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describeProvisionedProductPlan = function (args, optionsOrCb, cb) {
        var command = new DescribeProvisionedProductPlanCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describeProvisioningArtifact = function (args, optionsOrCb, cb) {
        var command = new DescribeProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describeProvisioningParameters = function (args, optionsOrCb, cb) {
        var command = new DescribeProvisioningParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describeRecord = function (args, optionsOrCb, cb) {
        var command = new DescribeRecordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describeServiceAction = function (args, optionsOrCb, cb) {
        var command = new DescribeServiceActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describeServiceActionExecutionParameters = function (args, optionsOrCb, cb) {
        var command = new DescribeServiceActionExecutionParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.describeTagOption = function (args, optionsOrCb, cb) {
        var command = new DescribeTagOptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.disableAWSOrganizationsAccess = function (args, optionsOrCb, cb) {
        var command = new DisableAWSOrganizationsAccessCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.disassociateBudgetFromResource = function (args, optionsOrCb, cb) {
        var command = new DisassociateBudgetFromResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.disassociatePrincipalFromPortfolio = function (args, optionsOrCb, cb) {
        var command = new DisassociatePrincipalFromPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.disassociateProductFromPortfolio = function (args, optionsOrCb, cb) {
        var command = new DisassociateProductFromPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.disassociateServiceActionFromProvisioningArtifact = function (args, optionsOrCb, cb) {
        var command = new DisassociateServiceActionFromProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.disassociateTagOptionFromResource = function (args, optionsOrCb, cb) {
        var command = new DisassociateTagOptionFromResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.enableAWSOrganizationsAccess = function (args, optionsOrCb, cb) {
        var command = new EnableAWSOrganizationsAccessCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.executeProvisionedProductPlan = function (args, optionsOrCb, cb) {
        var command = new ExecuteProvisionedProductPlanCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.executeProvisionedProductServiceAction = function (args, optionsOrCb, cb) {
        var command = new ExecuteProvisionedProductServiceActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.getAWSOrganizationsAccessStatus = function (args, optionsOrCb, cb) {
        var command = new GetAWSOrganizationsAccessStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.getProvisionedProductOutputs = function (args, optionsOrCb, cb) {
        var command = new GetProvisionedProductOutputsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.importAsProvisionedProduct = function (args, optionsOrCb, cb) {
        var command = new ImportAsProvisionedProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listAcceptedPortfolioShares = function (args, optionsOrCb, cb) {
        var command = new ListAcceptedPortfolioSharesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listBudgetsForResource = function (args, optionsOrCb, cb) {
        var command = new ListBudgetsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listConstraintsForPortfolio = function (args, optionsOrCb, cb) {
        var command = new ListConstraintsForPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listLaunchPaths = function (args, optionsOrCb, cb) {
        var command = new ListLaunchPathsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listOrganizationPortfolioAccess = function (args, optionsOrCb, cb) {
        var command = new ListOrganizationPortfolioAccessCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listPortfolioAccess = function (args, optionsOrCb, cb) {
        var command = new ListPortfolioAccessCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listPortfolios = function (args, optionsOrCb, cb) {
        var command = new ListPortfoliosCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listPortfoliosForProduct = function (args, optionsOrCb, cb) {
        var command = new ListPortfoliosForProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listPrincipalsForPortfolio = function (args, optionsOrCb, cb) {
        var command = new ListPrincipalsForPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listProvisionedProductPlans = function (args, optionsOrCb, cb) {
        var command = new ListProvisionedProductPlansCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listProvisioningArtifacts = function (args, optionsOrCb, cb) {
        var command = new ListProvisioningArtifactsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listProvisioningArtifactsForServiceAction = function (args, optionsOrCb, cb) {
        var command = new ListProvisioningArtifactsForServiceActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listRecordHistory = function (args, optionsOrCb, cb) {
        var command = new ListRecordHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listResourcesForTagOption = function (args, optionsOrCb, cb) {
        var command = new ListResourcesForTagOptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listServiceActions = function (args, optionsOrCb, cb) {
        var command = new ListServiceActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listServiceActionsForProvisioningArtifact = function (args, optionsOrCb, cb) {
        var command = new ListServiceActionsForProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listStackInstancesForProvisionedProduct = function (args, optionsOrCb, cb) {
        var command = new ListStackInstancesForProvisionedProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.listTagOptions = function (args, optionsOrCb, cb) {
        var command = new ListTagOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.provisionProduct = function (args, optionsOrCb, cb) {
        var command = new ProvisionProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.rejectPortfolioShare = function (args, optionsOrCb, cb) {
        var command = new RejectPortfolioShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.scanProvisionedProducts = function (args, optionsOrCb, cb) {
        var command = new ScanProvisionedProductsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.searchProducts = function (args, optionsOrCb, cb) {
        var command = new SearchProductsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.searchProductsAsAdmin = function (args, optionsOrCb, cb) {
        var command = new SearchProductsAsAdminCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.searchProvisionedProducts = function (args, optionsOrCb, cb) {
        var command = new SearchProvisionedProductsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.terminateProvisionedProduct = function (args, optionsOrCb, cb) {
        var command = new TerminateProvisionedProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.updateConstraint = function (args, optionsOrCb, cb) {
        var command = new UpdateConstraintCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.updatePortfolio = function (args, optionsOrCb, cb) {
        var command = new UpdatePortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.updatePortfolioShare = function (args, optionsOrCb, cb) {
        var command = new UpdatePortfolioShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.updateProduct = function (args, optionsOrCb, cb) {
        var command = new UpdateProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.updateProvisionedProduct = function (args, optionsOrCb, cb) {
        var command = new UpdateProvisionedProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.updateProvisionedProductProperties = function (args, optionsOrCb, cb) {
        var command = new UpdateProvisionedProductPropertiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.updateProvisioningArtifact = function (args, optionsOrCb, cb) {
        var command = new UpdateProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.updateServiceAction = function (args, optionsOrCb, cb) {
        var command = new UpdateServiceActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ServiceCatalog.prototype.updateTagOption = function (args, optionsOrCb, cb) {
        var command = new UpdateTagOptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return ServiceCatalog;
}(ServiceCatalogClient));
export { ServiceCatalog };
//# sourceMappingURL=ServiceCatalog.js.map