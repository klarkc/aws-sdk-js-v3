import { __extends } from "tslib";
import { ListProtectionGroupsRequest, ListProtectionGroupsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListProtectionGroupsCommand, serializeAws_json1_1ListProtectionGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the <a>ProtectionGroup</a> objects for the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListProtectionGroupsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListProtectionGroupsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new ListProtectionGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProtectionGroupsCommandInput} for command's `input` shape.
 * @see {@link ListProtectionGroupsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProtectionGroupsCommand = /** @class */ (function (_super) {
    __extends(ListProtectionGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProtectionGroupsCommand(input) {
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
    ListProtectionGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "ListProtectionGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProtectionGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProtectionGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProtectionGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListProtectionGroupsCommand(input, context);
    };
    ListProtectionGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListProtectionGroupsCommand(output, context);
    };
    return ListProtectionGroupsCommand;
}($Command));
export { ListProtectionGroupsCommand };
//# sourceMappingURL=ListProtectionGroupsCommand.js.map