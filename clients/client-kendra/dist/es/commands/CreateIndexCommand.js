import { __extends } from "tslib";
import { CreateIndexRequest, CreateIndexResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateIndexCommand, serializeAws_json1_1CreateIndexCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new Amazon Kendra index. Index creation is an asynchronous
 *       operation. To determine if index creation has completed, check the
 *         <code>Status</code> field returned from a call to
 *         <code>DescribeIndex</code>. The <code>Status</code> field is set to
 *         <code>ACTIVE</code> when the index is ready to use.</p>
 *          <p>Once the index is active you can index your documents using the
 *         <code>BatchPutDocument</code> operation or using one of the supported
 *       data sources. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateIndexCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateIndexCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new CreateIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIndexCommandInput} for command's `input` shape.
 * @see {@link CreateIndexCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateIndexCommand = /** @class */ (function (_super) {
    __extends(CreateIndexCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateIndexCommand(input) {
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
    CreateIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "CreateIndexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateIndexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateIndexResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateIndexCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateIndexCommand(input, context);
    };
    CreateIndexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateIndexCommand(output, context);
    };
    return CreateIndexCommand;
}($Command));
export { CreateIndexCommand };
//# sourceMappingURL=CreateIndexCommand.js.map