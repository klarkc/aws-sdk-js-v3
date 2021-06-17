import { __extends } from "tslib";
import { ListHarvestJobsRequest, ListHarvestJobsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListHarvestJobsCommand, serializeAws_restJson1ListHarvestJobsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Returns a collection of HarvestJob records.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, ListHarvestJobsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, ListHarvestJobsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new ListHarvestJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHarvestJobsCommandInput} for command's `input` shape.
 * @see {@link ListHarvestJobsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListHarvestJobsCommand = /** @class */ (function (_super) {
    __extends(ListHarvestJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListHarvestJobsCommand(input) {
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
    ListHarvestJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageClient";
        var commandName = "ListHarvestJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListHarvestJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListHarvestJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListHarvestJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListHarvestJobsCommand(input, context);
    };
    ListHarvestJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListHarvestJobsCommand(output, context);
    };
    return ListHarvestJobsCommand;
}($Command));
export { ListHarvestJobsCommand };
//# sourceMappingURL=ListHarvestJobsCommand.js.map