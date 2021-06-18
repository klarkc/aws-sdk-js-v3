import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListFieldLevelEncryptionProfilesRequest, ListFieldLevelEncryptionProfilesResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListFieldLevelEncryptionProfilesCommandInput extends ListFieldLevelEncryptionProfilesRequest {}
export interface ListFieldLevelEncryptionProfilesCommandOutput
  extends ListFieldLevelEncryptionProfilesResult,
    __MetadataBearer {}
/**
 * <p>Request a list of field-level encryption profiles that have been created in CloudFront for this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListFieldLevelEncryptionProfilesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListFieldLevelEncryptionProfilesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListFieldLevelEncryptionProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFieldLevelEncryptionProfilesCommandInput} for command's `input` shape.
 * @see {@link ListFieldLevelEncryptionProfilesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFieldLevelEncryptionProfilesCommand extends $Command<
  ListFieldLevelEncryptionProfilesCommandInput,
  ListFieldLevelEncryptionProfilesCommandOutput,
  CloudFrontClientResolvedConfig
> {
  readonly input: ListFieldLevelEncryptionProfilesCommandInput;
  constructor(input: ListFieldLevelEncryptionProfilesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFieldLevelEncryptionProfilesCommandInput, ListFieldLevelEncryptionProfilesCommandOutput>;
  private serialize;
  private deserialize;
}
