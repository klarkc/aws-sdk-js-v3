import { __extends } from "tslib";
import { EnableImportFindingsForProductRequest, EnableImportFindingsForProductResponse } from "../models/models_1";
import { deserializeAws_restJson1EnableImportFindingsForProductCommand, serializeAws_restJson1EnableImportFindingsForProductCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the integration of a partner product with Security Hub. Integrated products send
 *          findings to Security Hub.</p>
 *          <p>When you enable a product integration, a permissions policy that grants permission for
 *          the product to send findings to Security Hub is applied.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, EnableImportFindingsForProductCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, EnableImportFindingsForProductCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new EnableImportFindingsForProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableImportFindingsForProductCommandInput} for command's `input` shape.
 * @see {@link EnableImportFindingsForProductCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableImportFindingsForProductCommand = /** @class */ (function (_super) {
    __extends(EnableImportFindingsForProductCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableImportFindingsForProductCommand(input) {
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
    EnableImportFindingsForProductCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "EnableImportFindingsForProductCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableImportFindingsForProductRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableImportFindingsForProductResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableImportFindingsForProductCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1EnableImportFindingsForProductCommand(input, context);
    };
    EnableImportFindingsForProductCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1EnableImportFindingsForProductCommand(output, context);
    };
    return EnableImportFindingsForProductCommand;
}($Command));
export { EnableImportFindingsForProductCommand };
//# sourceMappingURL=EnableImportFindingsForProductCommand.js.map