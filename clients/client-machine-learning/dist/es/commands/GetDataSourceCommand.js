import { __extends } from "tslib";
import { GetDataSourceInput, GetDataSourceOutput } from "../models/models_0";
import { deserializeAws_json1_1GetDataSourceCommand, serializeAws_json1_1GetDataSourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p>
 *         <p>
 *             <code>GetDataSource</code> provides results in normal or verbose format. The verbose format
 *             adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, GetDataSourceCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, GetDataSourceCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new GetDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataSourceCommandInput} for command's `input` shape.
 * @see {@link GetDataSourceCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDataSourceCommand = /** @class */ (function (_super) {
    __extends(GetDataSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDataSourceCommand(input) {
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
    GetDataSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "GetDataSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDataSourceInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetDataSourceOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDataSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDataSourceCommand(input, context);
    };
    GetDataSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDataSourceCommand(output, context);
    };
    return GetDataSourceCommand;
}($Command));
export { GetDataSourceCommand };
//# sourceMappingURL=GetDataSourceCommand.js.map