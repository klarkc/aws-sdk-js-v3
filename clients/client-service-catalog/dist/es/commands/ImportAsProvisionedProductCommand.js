import { __extends } from "tslib";
import { ImportAsProvisionedProductInput, ImportAsProvisionedProductOutput } from "../models/models_0";
import { deserializeAws_json1_1ImportAsProvisionedProductCommand, serializeAws_json1_1ImportAsProvisionedProductCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Requests the import of a resource as a Service Catalog provisioned product that is
 *          associated to a Service Catalog product and provisioning artifact. Once imported, all
 *          supported Service Catalog governance actions are supported on the provisioned
 *          product.</p>
 *          <p>Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets and
 *          non-root nested stacks are not supported.</p>
 *          <p>The CloudFormation stack must have one of the following statuses to be imported:
 *          <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>,
 *          <code>IMPORT_ROLLBACK_COMPLETE</code>.</p>
 *          <p>Import of the resource requires that the CloudFormation stack template matches the
 *          associated Service Catalog product provisioning artifact. </p>
 *
 *          <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code>
 *          and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ImportAsProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ImportAsProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ImportAsProvisionedProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportAsProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link ImportAsProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportAsProvisionedProductCommand = /** @class */ (function (_super) {
    __extends(ImportAsProvisionedProductCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportAsProvisionedProductCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    ImportAsProvisionedProductCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ImportAsProvisionedProductCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportAsProvisionedProductInput.filterSensitiveLog,
            outputFilterSensitiveLog: ImportAsProvisionedProductOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportAsProvisionedProductCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ImportAsProvisionedProductCommand(input, context);
    };
    ImportAsProvisionedProductCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ImportAsProvisionedProductCommand(output, context);
    };
    return ImportAsProvisionedProductCommand;
}($Command));
export { ImportAsProvisionedProductCommand };
//# sourceMappingURL=ImportAsProvisionedProductCommand.js.map