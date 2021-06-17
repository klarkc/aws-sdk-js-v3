import { __extends } from "tslib";
import { CreateRelationalDatabaseRequest, CreateRelationalDatabaseResult } from "../models/models_0";
import { deserializeAws_json1_1CreateRelationalDatabaseCommand, serializeAws_json1_1CreateRelationalDatabaseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new database in Amazon Lightsail.</p>
 *          <p>The <code>create relational database</code> operation supports tag-based access control
 *       via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link CreateRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRelationalDatabaseCommand = /** @class */ (function (_super) {
    __extends(CreateRelationalDatabaseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRelationalDatabaseCommand(input) {
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
    CreateRelationalDatabaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateRelationalDatabaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRelationalDatabaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRelationalDatabaseResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRelationalDatabaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateRelationalDatabaseCommand(input, context);
    };
    CreateRelationalDatabaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateRelationalDatabaseCommand(output, context);
    };
    return CreateRelationalDatabaseCommand;
}($Command));
export { CreateRelationalDatabaseCommand };
//# sourceMappingURL=CreateRelationalDatabaseCommand.js.map