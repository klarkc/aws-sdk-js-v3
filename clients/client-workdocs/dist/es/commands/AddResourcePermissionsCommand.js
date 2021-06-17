import { __extends } from "tslib";
import { AddResourcePermissionsRequest, AddResourcePermissionsResponse } from "../models/models_0";
import { deserializeAws_restJson1AddResourcePermissionsCommand, serializeAws_restJson1AddResourcePermissionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a set of permissions for the specified folder or document. The resource
 *             permissions are overwritten if the principals already have different
 *             permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, AddResourcePermissionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, AddResourcePermissionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new AddResourcePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddResourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link AddResourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddResourcePermissionsCommand = /** @class */ (function (_super) {
    __extends(AddResourcePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddResourcePermissionsCommand(input) {
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
    AddResourcePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "AddResourcePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddResourcePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddResourcePermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddResourcePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AddResourcePermissionsCommand(input, context);
    };
    AddResourcePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AddResourcePermissionsCommand(output, context);
    };
    return AddResourcePermissionsCommand;
}($Command));
export { AddResourcePermissionsCommand };
//# sourceMappingURL=AddResourcePermissionsCommand.js.map