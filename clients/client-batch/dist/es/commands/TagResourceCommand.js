import { __extends } from "tslib";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1TagResourceCommand,
  serializeAws_restJson1TagResourceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a
 *    resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags
 *    associated with that resource are deleted as well. AWS Batch resources that support tags are compute environments, jobs, job definitions, and job
 *  queues. ARNs for child jobs of array and multi-node parallel (MNP) jobs are not supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, TagResourceCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, TagResourceCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
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
    var clientName = "BatchClient";
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
    return serializeAws_restJson1TagResourceCommand(input, context);
  };
  TagResourceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1TagResourceCommand(output, context);
  };
  return TagResourceCommand;
})($Command);
export { TagResourceCommand };
//# sourceMappingURL=TagResourceCommand.js.map
