import { __extends } from "tslib";
import { CreateInstancesRequest, CreateInstancesResult } from "../models/models_0";
import { deserializeAws_json1_1CreateInstancesCommand, serializeAws_json1_1CreateInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates one or more Amazon Lightsail instances.</p>
 *          <p>The <code>create instances</code> operation supports tag-based access control via request
 *       tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateInstancesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateInstancesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstancesCommandInput} for command's `input` shape.
 * @see {@link CreateInstancesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateInstancesCommand = /** @class */ (function (_super) {
    __extends(CreateInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateInstancesCommand(input) {
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
    CreateInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateInstancesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateInstancesCommand(input, context);
    };
    CreateInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateInstancesCommand(output, context);
    };
    return CreateInstancesCommand;
}($Command));
export { CreateInstancesCommand };
//# sourceMappingURL=CreateInstancesCommand.js.map