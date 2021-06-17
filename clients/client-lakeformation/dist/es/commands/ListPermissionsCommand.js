import { __extends } from "tslib";
import { ListPermissionsRequest, ListPermissionsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListPermissionsCommand, serializeAws_json1_1ListPermissionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p>
 * 	        <p>This operation returns only those permissions that have been explicitly granted.</p>
 * 	        <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListPermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListPermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new ListPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPermissionsCommandInput} for command's `input` shape.
 * @see {@link ListPermissionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPermissionsCommand = /** @class */ (function (_super) {
    __extends(ListPermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPermissionsCommand(input) {
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
    ListPermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "ListPermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPermissionsCommand(input, context);
    };
    ListPermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPermissionsCommand(output, context);
    };
    return ListPermissionsCommand;
}($Command));
export { ListPermissionsCommand };
//# sourceMappingURL=ListPermissionsCommand.js.map