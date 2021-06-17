import { __extends } from "tslib";
import { CreateDataSourceRequest, CreateDataSourceResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateDataSourceCommand, serializeAws_json1_1CreateDataSourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a data source that you use to with an Amazon Kendra index. </p>
 *          <p>You specify a name, data source connector type and description for
 *       your data source. You also specify configuration information such as
 *       document metadata (author, source URI, and so on) and user context
 *       information.</p>
 *          <p>
 *             <code>CreateDataSource</code> is a synchronous operation. The
 *       operation returns 200 if the data source was successfully created.
 *       Otherwise, an exception is raised.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateDataSourceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateDataSourceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new CreateDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataSourceCommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDataSourceCommand = /** @class */ (function (_super) {
    __extends(CreateDataSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDataSourceCommand(input) {
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
    CreateDataSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "CreateDataSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDataSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDataSourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDataSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDataSourceCommand(input, context);
    };
    CreateDataSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDataSourceCommand(output, context);
    };
    return CreateDataSourceCommand;
}($Command));
export { CreateDataSourceCommand };
//# sourceMappingURL=CreateDataSourceCommand.js.map