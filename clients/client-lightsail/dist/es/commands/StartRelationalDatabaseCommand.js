import { __extends } from "tslib";
import { StartRelationalDatabaseRequest, StartRelationalDatabaseResult } from "../models/models_1";
import { deserializeAws_json1_1StartRelationalDatabaseCommand, serializeAws_json1_1StartRelationalDatabaseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database,
 *       use the <code>reboot relational database</code> operation.</p>
 *          <p>The <code>start relational database</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by relationalDatabaseName. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, StartRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, StartRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new StartRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link StartRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartRelationalDatabaseCommand = /** @class */ (function (_super) {
    __extends(StartRelationalDatabaseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartRelationalDatabaseCommand(input) {
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
    StartRelationalDatabaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "StartRelationalDatabaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartRelationalDatabaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartRelationalDatabaseResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartRelationalDatabaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartRelationalDatabaseCommand(input, context);
    };
    StartRelationalDatabaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartRelationalDatabaseCommand(output, context);
    };
    return StartRelationalDatabaseCommand;
}($Command));
export { StartRelationalDatabaseCommand };
//# sourceMappingURL=StartRelationalDatabaseCommand.js.map