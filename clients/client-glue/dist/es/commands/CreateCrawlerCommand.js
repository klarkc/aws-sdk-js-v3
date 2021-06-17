import { __extends } from "tslib";
import { CreateCrawlerRequest, CreateCrawlerResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateCrawlerCommand, serializeAws_json1_1CreateCrawlerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new crawler with specified targets, role, configuration, and optional schedule.
 *       At least one crawl target must be specified, in the <code>s3Targets</code> field, the
 *         <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateCrawlerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCrawlerCommandInput} for command's `input` shape.
 * @see {@link CreateCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCrawlerCommand = /** @class */ (function (_super) {
    __extends(CreateCrawlerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCrawlerCommand(input) {
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
    CreateCrawlerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "CreateCrawlerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCrawlerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCrawlerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCrawlerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateCrawlerCommand(input, context);
    };
    CreateCrawlerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateCrawlerCommand(output, context);
    };
    return CreateCrawlerCommand;
}($Command));
export { CreateCrawlerCommand };
//# sourceMappingURL=CreateCrawlerCommand.js.map