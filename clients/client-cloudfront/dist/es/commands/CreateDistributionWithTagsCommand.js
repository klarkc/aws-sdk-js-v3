import { __extends } from "tslib";
import { CreateDistributionWithTagsRequest, CreateDistributionWithTagsResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateDistributionWithTagsCommand,
  serializeAws_restXmlCreateDistributionWithTagsCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a new distribution with tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateDistributionWithTagsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateDistributionWithTagsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateDistributionWithTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDistributionWithTagsCommandInput} for command's `input` shape.
 * @see {@link CreateDistributionWithTagsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDistributionWithTagsCommand = /** @class */ (function (_super) {
  __extends(CreateDistributionWithTagsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateDistributionWithTagsCommand(input) {
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
  CreateDistributionWithTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "CreateDistributionWithTagsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateDistributionWithTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDistributionWithTagsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateDistributionWithTagsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlCreateDistributionWithTagsCommand(input, context);
  };
  CreateDistributionWithTagsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlCreateDistributionWithTagsCommand(output, context);
  };
  return CreateDistributionWithTagsCommand;
})($Command);
export { CreateDistributionWithTagsCommand };
//# sourceMappingURL=CreateDistributionWithTagsCommand.js.map
