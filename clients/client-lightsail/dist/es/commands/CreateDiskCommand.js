import { __extends } from "tslib";
import { CreateDiskRequest, CreateDiskResult } from "../models/models_0";
import { deserializeAws_json1_1CreateDiskCommand, serializeAws_json1_1CreateDiskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the
 *       same Availability Zone (e.g., <code>us-east-2a</code>).</p>
 *          <p>The <code>create disk</code> operation supports tag-based access control via request tags.
 *       For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateDiskCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateDiskCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateDiskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDiskCommandInput} for command's `input` shape.
 * @see {@link CreateDiskCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDiskCommand = /** @class */ (function (_super) {
    __extends(CreateDiskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDiskCommand(input) {
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
    CreateDiskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateDiskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDiskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDiskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDiskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDiskCommand(input, context);
    };
    CreateDiskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDiskCommand(output, context);
    };
    return CreateDiskCommand;
}($Command));
export { CreateDiskCommand };
//# sourceMappingURL=CreateDiskCommand.js.map