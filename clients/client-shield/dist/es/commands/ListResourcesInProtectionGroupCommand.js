import { __extends } from "tslib";
import { ListResourcesInProtectionGroupRequest, ListResourcesInProtectionGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1ListResourcesInProtectionGroupCommand, serializeAws_json1_1ListResourcesInProtectionGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the resources that are included in the protection group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListResourcesInProtectionGroupCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListResourcesInProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new ListResourcesInProtectionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourcesInProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link ListResourcesInProtectionGroupCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResourcesInProtectionGroupCommand = /** @class */ (function (_super) {
    __extends(ListResourcesInProtectionGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResourcesInProtectionGroupCommand(input) {
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
    ListResourcesInProtectionGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "ListResourcesInProtectionGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourcesInProtectionGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourcesInProtectionGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourcesInProtectionGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResourcesInProtectionGroupCommand(input, context);
    };
    ListResourcesInProtectionGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResourcesInProtectionGroupCommand(output, context);
    };
    return ListResourcesInProtectionGroupCommand;
}($Command));
export { ListResourcesInProtectionGroupCommand };
//# sourceMappingURL=ListResourcesInProtectionGroupCommand.js.map