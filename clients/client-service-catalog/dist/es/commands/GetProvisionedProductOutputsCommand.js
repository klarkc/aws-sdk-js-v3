import { __extends } from "tslib";
import { GetProvisionedProductOutputsInput, GetProvisionedProductOutputsOutput } from "../models/models_0";
import { deserializeAws_json1_1GetProvisionedProductOutputsCommand, serializeAws_json1_1GetProvisionedProductOutputsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, GetProvisionedProductOutputsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, GetProvisionedProductOutputsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new GetProvisionedProductOutputsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProvisionedProductOutputsCommandInput} for command's `input` shape.
 * @see {@link GetProvisionedProductOutputsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetProvisionedProductOutputsCommand = /** @class */ (function (_super) {
    __extends(GetProvisionedProductOutputsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetProvisionedProductOutputsCommand(input) {
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
    GetProvisionedProductOutputsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "GetProvisionedProductOutputsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetProvisionedProductOutputsInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetProvisionedProductOutputsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetProvisionedProductOutputsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetProvisionedProductOutputsCommand(input, context);
    };
    GetProvisionedProductOutputsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetProvisionedProductOutputsCommand(output, context);
    };
    return GetProvisionedProductOutputsCommand;
}($Command));
export { GetProvisionedProductOutputsCommand };
//# sourceMappingURL=GetProvisionedProductOutputsCommand.js.map