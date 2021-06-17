import { __extends } from "tslib";
import { ListPolicyVersionsRequest, ListPolicyVersionsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListPolicyVersionsCommand, serializeAws_restJson1ListPolicyVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the versions of the specified policy and identifies the default
 *          version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPolicyVersionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPolicyVersionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListPolicyVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPolicyVersionsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyVersionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPolicyVersionsCommand = /** @class */ (function (_super) {
    __extends(ListPolicyVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPolicyVersionsCommand(input) {
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
    ListPolicyVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListPolicyVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPolicyVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPolicyVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPolicyVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPolicyVersionsCommand(input, context);
    };
    ListPolicyVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPolicyVersionsCommand(output, context);
    };
    return ListPolicyVersionsCommand;
}($Command));
export { ListPolicyVersionsCommand };
//# sourceMappingURL=ListPolicyVersionsCommand.js.map