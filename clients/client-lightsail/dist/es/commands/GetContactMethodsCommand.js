import { __extends } from "tslib";
import { GetContactMethodsRequest, GetContactMethodsResult } from "../models/models_0";
import { deserializeAws_json1_1GetContactMethodsCommand, serializeAws_json1_1GetContactMethodsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the configured contact methods. Specify a protocol in your
 *       request to return information about a specific contact method.</p>
 *          <p>A contact method is used to send you notifications about your Amazon Lightsail resources.
 *       You can add one email address and one mobile phone number contact method in each AWS Region.
 *       However, SMS text messaging is not supported in some AWS Regions, and SMS text messages
 *       cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContactMethodsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContactMethodsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContactMethodsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContactMethodsCommandInput} for command's `input` shape.
 * @see {@link GetContactMethodsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContactMethodsCommand = /** @class */ (function (_super) {
    __extends(GetContactMethodsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContactMethodsCommand(input) {
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
    GetContactMethodsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetContactMethodsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContactMethodsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContactMethodsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContactMethodsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetContactMethodsCommand(input, context);
    };
    GetContactMethodsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetContactMethodsCommand(output, context);
    };
    return GetContactMethodsCommand;
}($Command));
export { GetContactMethodsCommand };
//# sourceMappingURL=GetContactMethodsCommand.js.map