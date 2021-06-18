import { __extends } from "tslib";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1TagResourceCommand,
  serializeAws_json1_1TagResourceCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Add one or more tags (keys and values) to a specified application. A
 *          <i>tag</i> is a label that you optionally define and associate with an
 *          application. Tags can help you categorize and manage application in different ways, such as
 *          by purpose, owner, environment, or other criteria. </p>
 *          <p>Each tag consists of a required <i>tag key</i> and an
 *          associated <i>tag value</i>, both of which you define. A tag key is a
 *          general label that acts as a category for more specific tag values. A tag value acts as
 *          a descriptor within a tag key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, TagResourceCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, TagResourceCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TagResourceCommand = /** @class */ (function (_super) {
  __extends(TagResourceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function TagResourceCommand(input) {
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
  TagResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "TagResourceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: TagResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TagResourceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  TagResourceCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1TagResourceCommand(input, context);
  };
  TagResourceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1TagResourceCommand(output, context);
  };
  return TagResourceCommand;
})($Command);
export { TagResourceCommand };
//# sourceMappingURL=TagResourceCommand.js.map
