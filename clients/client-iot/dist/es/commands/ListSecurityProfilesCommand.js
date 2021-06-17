import { __extends } from "tslib";
import { ListSecurityProfilesRequest, ListSecurityProfilesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListSecurityProfilesCommand, serializeAws_restJson1ListSecurityProfilesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the Device Defender security profiles
 *       you've
 *       created. You can filter security profiles by dimension or custom metric.</p>
 *          <note>
 *             <p>
 *                <code>dimensionName</code> and <code>metricName</code> cannot be used in the same request.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListSecurityProfilesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListSecurityProfilesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListSecurityProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecurityProfilesCommandInput} for command's `input` shape.
 * @see {@link ListSecurityProfilesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSecurityProfilesCommand = /** @class */ (function (_super) {
    __extends(ListSecurityProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSecurityProfilesCommand(input) {
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
    ListSecurityProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListSecurityProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSecurityProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSecurityProfilesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSecurityProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSecurityProfilesCommand(input, context);
    };
    ListSecurityProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSecurityProfilesCommand(output, context);
    };
    return ListSecurityProfilesCommand;
}($Command));
export { ListSecurityProfilesCommand };
//# sourceMappingURL=ListSecurityProfilesCommand.js.map