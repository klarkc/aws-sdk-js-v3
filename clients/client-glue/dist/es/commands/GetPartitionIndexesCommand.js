import { __extends } from "tslib";
import { GetPartitionIndexesRequest, GetPartitionIndexesResponse } from "../models/models_1";
import { deserializeAws_json1_1GetPartitionIndexesCommand, serializeAws_json1_1GetPartitionIndexesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the partition indexes associated with a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetPartitionIndexesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetPartitionIndexesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetPartitionIndexesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartitionIndexesCommandInput} for command's `input` shape.
 * @see {@link GetPartitionIndexesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPartitionIndexesCommand = /** @class */ (function (_super) {
    __extends(GetPartitionIndexesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPartitionIndexesCommand(input) {
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
    GetPartitionIndexesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetPartitionIndexesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPartitionIndexesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPartitionIndexesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPartitionIndexesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPartitionIndexesCommand(input, context);
    };
    GetPartitionIndexesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPartitionIndexesCommand(output, context);
    };
    return GetPartitionIndexesCommand;
}($Command));
export { GetPartitionIndexesCommand };
//# sourceMappingURL=GetPartitionIndexesCommand.js.map