import { __extends } from "tslib";
import { GetAWSOrganizationsAccessStatusInput, GetAWSOrganizationsAccessStatusOutput } from "../models/models_0";
import { deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommand, serializeAws_json1_1GetAWSOrganizationsAccessStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get the Access Status for AWS Organization portfolio share feature. This API can only be
 *          called by the management account in the organization or by a delegated admin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, GetAWSOrganizationsAccessStatusCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, GetAWSOrganizationsAccessStatusCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new GetAWSOrganizationsAccessStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAWSOrganizationsAccessStatusCommandInput} for command's `input` shape.
 * @see {@link GetAWSOrganizationsAccessStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAWSOrganizationsAccessStatusCommand = /** @class */ (function (_super) {
    __extends(GetAWSOrganizationsAccessStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAWSOrganizationsAccessStatusCommand(input) {
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
    GetAWSOrganizationsAccessStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "GetAWSOrganizationsAccessStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAWSOrganizationsAccessStatusInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetAWSOrganizationsAccessStatusOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAWSOrganizationsAccessStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAWSOrganizationsAccessStatusCommand(input, context);
    };
    GetAWSOrganizationsAccessStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommand(output, context);
    };
    return GetAWSOrganizationsAccessStatusCommand;
}($Command));
export { GetAWSOrganizationsAccessStatusCommand };
//# sourceMappingURL=GetAWSOrganizationsAccessStatusCommand.js.map