import { __extends } from "tslib";
import { StopRelationalDatabaseRequest, StopRelationalDatabaseResult } from "../models/models_1";
import { deserializeAws_json1_1StopRelationalDatabaseCommand, serializeAws_json1_1StopRelationalDatabaseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a specific database that is currently running in Amazon Lightsail.</p>
 *          <p>The <code>stop relational database</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by relationalDatabaseName. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, StopRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, StopRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new StopRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link StopRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopRelationalDatabaseCommand = /** @class */ (function (_super) {
    __extends(StopRelationalDatabaseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopRelationalDatabaseCommand(input) {
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
    StopRelationalDatabaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "StopRelationalDatabaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopRelationalDatabaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopRelationalDatabaseResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopRelationalDatabaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopRelationalDatabaseCommand(input, context);
    };
    StopRelationalDatabaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopRelationalDatabaseCommand(output, context);
    };
    return StopRelationalDatabaseCommand;
}($Command));
export { StopRelationalDatabaseCommand };
//# sourceMappingURL=StopRelationalDatabaseCommand.js.map