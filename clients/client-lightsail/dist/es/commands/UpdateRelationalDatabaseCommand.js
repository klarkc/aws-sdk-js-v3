import { __extends } from "tslib";
import { UpdateRelationalDatabaseRequest, UpdateRelationalDatabaseResult } from "../models/models_1";
import { deserializeAws_json1_1UpdateRelationalDatabaseCommand, serializeAws_json1_1UpdateRelationalDatabaseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p>
 *          <p>Updates are applied immediately, or in cases where the updates could result in an outage,
 *       are applied during the database's predefined maintenance window.</p>
 *          <p>The <code>update relational database</code> operation supports tag-based access control
 *       via resource tags applied to the resource identified by relationalDatabaseName. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link UpdateRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRelationalDatabaseCommand = /** @class */ (function (_super) {
    __extends(UpdateRelationalDatabaseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRelationalDatabaseCommand(input) {
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
    UpdateRelationalDatabaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "UpdateRelationalDatabaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRelationalDatabaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRelationalDatabaseResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRelationalDatabaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateRelationalDatabaseCommand(input, context);
    };
    UpdateRelationalDatabaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateRelationalDatabaseCommand(output, context);
    };
    return UpdateRelationalDatabaseCommand;
}($Command));
export { UpdateRelationalDatabaseCommand };
//# sourceMappingURL=UpdateRelationalDatabaseCommand.js.map