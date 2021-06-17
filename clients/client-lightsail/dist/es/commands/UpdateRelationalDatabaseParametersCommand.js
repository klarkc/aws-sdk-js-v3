import { __extends } from "tslib";
import { UpdateRelationalDatabaseParametersRequest, UpdateRelationalDatabaseParametersResult, } from "../models/models_1";
import { deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand, serializeAws_json1_1UpdateRelationalDatabaseParametersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p>
 *          <p>Parameter updates don't cause outages; therefore, their application is not subject to the
 *       preferred maintenance window. However, there are two ways in which parameter updates are
 *       applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a
 *         <code>dynamic</code> apply type are applied immediately. Parameters marked with a
 *         <code>pending-reboot</code> apply type are applied only after the database is rebooted using
 *       the <code>reboot relational database</code> operation.</p>
 *          <p>The <code>update relational database parameters</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by relationalDatabaseName. For
 *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateRelationalDatabaseParametersCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateRelationalDatabaseParametersCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateRelationalDatabaseParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRelationalDatabaseParametersCommandInput} for command's `input` shape.
 * @see {@link UpdateRelationalDatabaseParametersCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRelationalDatabaseParametersCommand = /** @class */ (function (_super) {
    __extends(UpdateRelationalDatabaseParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRelationalDatabaseParametersCommand(input) {
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
    UpdateRelationalDatabaseParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "UpdateRelationalDatabaseParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRelationalDatabaseParametersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRelationalDatabaseParametersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRelationalDatabaseParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateRelationalDatabaseParametersCommand(input, context);
    };
    UpdateRelationalDatabaseParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand(output, context);
    };
    return UpdateRelationalDatabaseParametersCommand;
}($Command));
export { UpdateRelationalDatabaseParametersCommand };
//# sourceMappingURL=UpdateRelationalDatabaseParametersCommand.js.map