import { __extends } from "tslib";
import { RebootRelationalDatabaseRequest, RebootRelationalDatabaseResult } from "../models/models_1";
import { deserializeAws_json1_1RebootRelationalDatabaseCommand, serializeAws_json1_1RebootRelationalDatabaseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restarts a specific database in Amazon Lightsail.</p>
 *          <p>The <code>reboot relational database</code> operation supports tag-based access control
 *       via resource tags applied to the resource identified by relationalDatabaseName. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, RebootRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, RebootRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new RebootRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link RebootRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RebootRelationalDatabaseCommand = /** @class */ (function (_super) {
    __extends(RebootRelationalDatabaseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RebootRelationalDatabaseCommand(input) {
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
    RebootRelationalDatabaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "RebootRelationalDatabaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RebootRelationalDatabaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RebootRelationalDatabaseResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RebootRelationalDatabaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RebootRelationalDatabaseCommand(input, context);
    };
    RebootRelationalDatabaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RebootRelationalDatabaseCommand(output, context);
    };
    return RebootRelationalDatabaseCommand;
}($Command));
export { RebootRelationalDatabaseCommand };
//# sourceMappingURL=RebootRelationalDatabaseCommand.js.map