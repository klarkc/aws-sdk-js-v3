import { __extends } from "tslib";
import { DescribeFolderContentsRequest, DescribeFolderContentsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeFolderContentsCommand, serializeAws_restJson1DescribeFolderContentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the contents of the specified folder, including its documents and
 *             subfolders.</p>
 *         <p>By default, Amazon WorkDocs returns the first 100 active document and folder
 *             metadata items. If there are more results, the response includes a marker that you can
 *             use to request the next set of results. You can also request initialized
 *             documents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeFolderContentsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeFolderContentsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeFolderContentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFolderContentsCommandInput} for command's `input` shape.
 * @see {@link DescribeFolderContentsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFolderContentsCommand = /** @class */ (function (_super) {
    __extends(DescribeFolderContentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFolderContentsCommand(input) {
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
    DescribeFolderContentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "DescribeFolderContentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFolderContentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFolderContentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFolderContentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeFolderContentsCommand(input, context);
    };
    DescribeFolderContentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeFolderContentsCommand(output, context);
    };
    return DescribeFolderContentsCommand;
}($Command));
export { DescribeFolderContentsCommand };
//# sourceMappingURL=DescribeFolderContentsCommand.js.map